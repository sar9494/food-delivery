'use client'
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const SignUp = () => {
    const [useInfo,setUserInfo] = useState({
        email:"",
    })
    const router = useRouter()

    const handleOnChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUserInfo({...useInfo,email:e.target.value})
    }
    const letsGoHandler = () =>{
        
    }
    useEffect(()=>{
        console.log(useInfo);
    },[useInfo])
  return (
    <div className="flex flex-col gap-6 w-[400px]">
      <Button className="w-fit border bg-white px-3 py-3">
        <ChevronLeft color="black " />
      </Button>
      <div>
        <p>
          <b>Create your account</b>
        </p>
        <p>Sign up to explore your favorite dishes.</p>
      </div>
      <div className="flex flex-col gap-4">
        <Input placeholder="Enter your email address" name="email" onChange={handleOnChangeEmail} />
        <a className="underline" href="">
          Forgot password ?
        </a>
      </div>
      <Button>Let's Go</Button>
      <div className="flex gap-2">
        <p>Already have an account?</p>
        <a className="text-[#2563EB]" href="">
          Log in
        </a>
      </div>
    </div>
  );
};
