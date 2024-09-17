"use client";
import { useSession } from "next-auth/react";
import {  useRouter } from "next/navigation";
import { useEffect } from "react";
const ProtectRoute = ({children}) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const token = session?.user?.userToken;

    useEffect(() =>{
       if ( status === "unauthenticated") {
            router.push("/")
        }
    },[status]);
    return children

}
export default ProtectRoute