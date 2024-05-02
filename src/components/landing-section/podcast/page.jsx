import Button from "@/components/button/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Podcast() {
  return (
    <div className="">
      <div className="md:text-3xl text-xl font-bold text-center">
        Listen To Podcast
      </div>
      <div className="flex justify-center items-center gap-5 my-8">
        <div>
          <Image
            src="/podcast/youtube.svg"
            height={15}
            width={30}
            alt="you-tube-image"
          />
        </div>
        <div className="font-semibold md:text-[20px]">Subscribe on Youtube</div>
      </div>
      {/* <div className="grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:items-end"> */}
      <div className="flex justify-center gap-8 md:items-end flex-wrap ">
        <div className="">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/fBsyJPQaKrA?si=knBGiepOfRhickmp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-xl"
          ></iframe>
          {/* <div> SERMAPod Ep. 60 | Parametric Insurance</div> */}
        </div>

        <div className="">
          <iframe
            src="https://www.youtube.com/embed/0SgP5MYU6ek?si=bAPAo65WV-Xee1cP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-xl xl:w-[380px] w-[300px] xl:h-[250px] h-[200px]"
          ></iframe>
          {/* <div className="w-[250px] md:w-[300px] ">
            {" "}
            The SERMAPod Ep. 59 | Virginia and Tennessee v. NCAA: The Battle
            Continues
          </div> */}
        </div>

        <div className="">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/a6cyZIVu9YQ?si=T4f6F1x9sS1zMRG1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-xl"
          ></iframe>
          {/* <div> The SERMAPod Ep. 58 | Dartmouth Ruling</div> */}
        </div>
      </div>
      <span className="my-10  flex justify-center">
      <Link href={"https://www.youtube.com/@serma8148"} target="_blank">
  <Button content={"View More"} px={"px-5"} py={"py-2"} />
</Link>

      </span>
    </div>
  );
}

export default Podcast;
