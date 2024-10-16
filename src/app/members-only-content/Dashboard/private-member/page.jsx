"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Skeleton from "@/components/skeleton/skeleton";
import useAxiosFetch from "@/hooks/axiosFetch";
import { Pagination } from "@/components/pagination/page";

const API_URL = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/contact/find`;

const Header = () => (
  <div className="grid  py-2 bg-[#F5F6F8] grid-cols-4 max-xs:pl-[14px] xs:place-items-center text-[12px] md:text-[16px] font-semibold">
    <div>Profile</div>
    <div>Name</div>
    <div>Organization</div>
    <div>Membership</div>
  </div>
);

const ContactRow = ({ data, onClick }) => (
  <>
  
    <div className="grid grid-cols-4 place-items-center max-lg:gap-10 my-4 text-[12px] md:text-[16px] font-normal">
      <div onClick={() => onClick(data?.id)} className="cursor-pointer">
        <Image
          src={data?.profile_url ?? "/image-not-found3.png"}
          height={50}
          width={50}
          alt="user_profile"
          className="rounded-full w-[40px] h-[40px]"
        />
      </div>
      <div
        onClick={() => onClick(data?.id)}
        className="cursor-pointer underline truncate duration-300 hover:text-primary hover:underline"
      >
        {data?.first_name ?? "N/A"} {data?.last_name ?? "N/A"}
      </div>
      <div>{data?.organization ?? "N/A"}</div>
      <div>{data?.membership ?? "N/A"}</div>
    </div>
    <hr className="text-[#D9D9D9]" />
  </>
);

const PrivateMember = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const token = session?.user?.userToken;
  const itemsPerPage = 6; // Change this to the number of items you want per page
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: contacts,
    loading,
    error,
  } = useAxiosFetch(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const totalPages = Math.ceil(contacts?.result?.length / itemsPerPage);

  const handleClick = (id) => {
    router.push(`/members-only-content/Dashboard/private-member/${id}`);
  };

  const currentData = contacts?.result?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full  h-1/2 rounded-lg border border-[#D9D9D980]">
      <Header />
      {loading ? (
        <Skeleton key={10} item={10} style="h-[100px] w-full rounded-lg mb-3" />
      ) : (
        currentData?.map((data) => (
          <ContactRow key={data.id} data={data} onClick={handleClick} />
        ))
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PrivateMember;
