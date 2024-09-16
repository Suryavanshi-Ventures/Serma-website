"use client";
import { useSession } from "next-auth/react";
import {  useRouter } from "next/navigation";
import { useEffect } from "react";
const ProtectRoute = ({children}) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const token = session?.user?.userToken;
    console.log(status)
    console.log(token)
    useEffect(() =>{
       if ( status === "unauthenticated") {
            router.push("/")
        }
    },[status]);
    return children

}
export default ProtectRoute