"use client";
import { useSession } from "next-auth/react";
import {  useRouter } from "next/navigation";
import { useEffect } from "react";
const ProtectRoute = ({children}) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    console.log(status)
    useEffect(() =>{
        if(status === "authenticated"){
            router.push("/members-only-content/Dashboard/member-forum")
        }
        else{
            router.push("/")
        }
    },[status]);
    return children

}
export default ProtectRoute