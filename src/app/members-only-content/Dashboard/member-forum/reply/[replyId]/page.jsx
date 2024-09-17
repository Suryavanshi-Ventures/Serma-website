"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
// import "tailwindcss/tailwind.css";
import dynamic from "next/dynamic";
import LoadingButton from "@/components/loadingButton/page";
import Image from "next/image";
import axios from "axios";
import CustomAlert from "@/components/alert/page";
function Reply() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const params = useParams();
  const { data: session } = useSession();
  const paramsId = params.replyId;
  const token = session?.user?.userToken;

  useEffect(() => {
    const fetchTopic = async () => {
      if (token) {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/topic/findById/${paramsId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setTitle(response.data.result.data?.title);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchTopic();
  }, [token, paramsId]);

  const [AlertDetails, setAlertDetails] = useState({
    isOpen: false,
    message: "",
    duration: 3000,
    position: "bottom",
    type: "success",
  });
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const fileInputRef = useRef(null);
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      ["clean"], // remove formatting button
    ],
  };

  const formats = [
    "font",
    "header",
    "list",
    "bullet",
    "script",
    "indent",
    "direction",
    "color",
    "background",
    "align",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "link",
    "image",
    "video",
  ];

  const handleSubmit = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/topic_reply/create`;
    const body = {
      topic_id: paramsId,
      content: content,
      attachments: images,
    };

    try {
      const response = await axios.post(apiUrl, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setAlertDetails({
        isOpen: true,
        message: "Reply Added Successfully",
        duration: 3000,
        position: "top",
        type: "success",
      });
      setTimeout(() => {
        router.push(`/members-only-content/Dashboard/member-forum/${paramsId}`);
      }, 2000);
    } catch (error) {
      setAlertDetails({
        isOpen: true,
        message: error?.response?.data?.message || "Failed to Add Reply",
        duration: 3000,
        position: "top",
        type: "danger",
      });
      console.error("Error making API call:", error);
    }
  };
  const SaymanGoBack = () => {
    router.push(`/members-only-content/Dashboard/member-forum/${paramsId}`);
  };
  const onImageChange = async (event) => {
    const files = event.target.files;

    const formData = new FormData();

    Array.from(files).forEach((file) => {
      formData.append("file", file);
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/file/upload/multiple`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const uploadedImageUrls = response?.data?.result?.data.map(
        (item) => item.media_url
      );
      setImages((prevImages) => [...prevImages, ...uploadedImageUrls]);
    } catch (error) {
      setAlertDetails({
        isOpen: true,
        message: "Failed to Attach image",
        duration: 3000,
        position: "top",
        type: "danger",
      });
      console.log(error);
      console.error("Image upload error:", error);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  return (
    <>
      {AlertDetails.isOpen && (
        <CustomAlert
          message={AlertDetails.message}
          duration={AlertDetails.duration}
          onClose={() =>
            setAlertDetails({
              ...AlertDetails,
              isOpen: false,
            })
          }
          position={AlertDetails.position}
          type={AlertDetails.type}
        />
      )}
      <div className="   w-full  bg-white  rounded-xl  space-y-4">
        <div className="flex items-center gap-5 mb-10">
          <div
            onClick={SaymanGoBack}
            className="text-gray cursor-pointer text-[15px] hover:text-primary font-semibold"
          >
            Member Chat Forum
          </div>
          <span>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.63388 7.11612C9.12204 7.60427 9.12204 8.39573 8.63388 8.88388L2.38388 15.1339C1.89573 15.622 1.10427 15.622 0.616117 15.1339C0.127961 14.6457 0.127961 13.8543 0.616117 13.3661L5.98223 8L0.616117 2.63388C0.127961 2.14573 0.127961 1.35427 0.616117 0.866117C1.10427 0.377961 1.89573 0.377961 2.38388 0.866117L8.63388 7.11612Z"
                fill="#C42C2D"
              />
            </svg>
          </span>
          <div className="text-primary font-semibold">Replies</div>
        </div>

        <div className="">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject*
          </label>
          <input
            type="text"
            id="subject"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => setSubject(e.target.value)}
            disabled={true}
            className="mt-1 block w-full md:w-1/2   px-3 py-2 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="">
          <ReactQuill
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
            formats={formats}
            //   className="bg-[#F8F8F8]"
          />
        </div>

        <div className="  flex gap-5 items-center">
          <input
            type="file"
            ref={fileInputRef}
            className="filetype"
            onChange={onImageChange}
            multiple
            style={{ display: "none" }}
          />
          <span
            className="text-primary underline cursor-pointer "
            onClick={handleButtonClick}
          >
            Attachments
          </span>
          <svg
            onClick={handleButtonClick}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7527 2.88604C18.7616 -0.105242 13.8943 -0.105242 10.9027 2.88604L1.6023 12.1864C-0.534217 14.3231 -0.534076 17.7998 1.60258 19.9364C2.671 21.0048 4.07397 21.539 5.4775 21.5389C6.88066 21.5387 8.28438 21.0047 9.35261 19.9364L17.8777 11.4111C18.4988 10.7901 18.8409 9.9644 18.841 9.08615C18.841 8.20785 18.499 7.38219 17.8778 6.76101C16.5957 5.47902 14.5096 5.47907 13.2277 6.76124L7.65264 12.3362C7.22463 12.7641 7.22463 13.4581 7.65255 13.8862C8.08052 14.3143 8.7745 14.3142 9.20256 13.8862L14.7777 8.31121C15.205 7.88385 15.9003 7.88376 16.3277 8.31112C16.5347 8.51812 16.6488 8.79337 16.6488 9.0861C16.6488 9.37884 16.5348 9.65399 16.3277 9.86108L7.8026 18.3863C6.52052 19.6683 4.43458 19.6685 3.1526 18.3864C1.87061 17.1043 1.87052 15.0183 3.15236 13.7362L12.4527 4.43605C14.5895 2.2993 18.0662 2.2993 20.2027 4.43605C21.2379 5.47105 21.808 6.84726 21.808 8.31102C21.808 9.77479 21.2378 11.151 20.2027 12.1861L10.9025 21.4866C10.4746 21.9146 10.4746 22.6085 10.9026 23.0366C11.1167 23.2506 11.3972 23.3576 11.6776 23.3576C11.9581 23.3576 12.2386 23.2505 12.4526 23.0366L21.7527 13.7361C23.2019 12.2871 23.9999 10.3604 24 8.31107C24 6.26174 23.2019 4.33509 21.7527 2.88604Z"
              fill="#C42C2D"
            />
          </svg>
          <span className="text-gray text-sm">
            You can upload up to 20 files. Each file should be less than 20 MB. 
          </span>
        </div>
        {images.map((img, index) => (
          <div key={index} className=" ">
            <div className="relative ">
              <Image
                src={img}
                height={150}
                width={150}
                alt={`preview image ${index + 1}`}
              />
              <button
                className="absolute top-1 rounded-full p-1"
                onClick={() => handleRemoveImage(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1c.55 0 1 .45 1 1h4.5c.83 0 1.5.67 1.5 1.5v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1c0-.28-.22-.5-.5-.5h-3V5h1.5c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-8c-.83 0-1.5-.67-1.5-1.5V6.5c0-.83.67-1.5 1.5-1.5H7V3.5c0-.28.22-.5.5-.5s.5.22.5.5V5h3V3c0-.55.45-1 1-1zM7 9c-.28 0-.5.22-.5.5v7c0 .28.22.5.5.5s.5-.22.5-.5v-7c0-.28-.22-.5-.5-.5zm3 0c-.28 0-.5.22-.5.5v7c0 .28.22.5.5.5s.5-.22.5-.5v-7c0-.28-.22-.5-.5-.5zm3 0c-.28 0-.5.22-.5.5v7c0 .28.22.5.5.5s.5-.22.5-.5v-7c0-.28-.22-.5-.5-.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-5 ">
          <input type="checkbox" className="accent-primary" />
          <p className="text-light-black text-[15px]">
            Stick topic to top of forum 
          </p>
        </div>

        <div className="flex justify-between md:justify-end gap-4">
          <span>
            {" "}
            <LoadingButton
              disabledProp={() => {}}
              style="hover:bg-primary  transition-all  duration-200 text-black p-[7px]  w-full xs:w-[132px]  rounded-3xl  border  hover:text-white "
              text="Cancel"
              spinnerWidth="23"
              spinnerHeight="23"
              loading={false}
            />
          </span>
          <span onClick={handleSubmit}>
            {" "}
            <LoadingButton
              disabledProp={() => {}}
              style="hover:bg-primary  transition-all  duration-200 text-black p-[7px]  w-full xs:w-[132px]  rounded-3xl text-primary border bg-gray  text-white "
              text="Post"
              spinnerWidth="23"
              spinnerHeight="23"
              loading={false}
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Reply;
