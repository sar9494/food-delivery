"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const SignUpStep2 = () => {
  const [useInfo, setUserInfo] = useState({
    password: "",
    confirm:""
  });
  const [error,setError] = useState("")
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name==="password"){
        setUserInfo({ ...useInfo, password: e.target.value });
    }else{
        setUserInfo({ ...useInfo, confirm: e.target.value });
    }
  };
  const letsGoHandler = () => {
    
  };
  useEffect(() => {
    console.log(useInfo);
  }, [useInfo]);
  return (
    <div className="flex flex-col gap-6 w-[400px]">
      <Button className="w-fit border bg-white px-3 py-3">
        <ChevronLeft color="black " />
      </Button>
      <div>
        <p>
          <b>Create your account</b>
        </p>
        <p>Create a strong password with letters, numbers.</p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Password"
          name="password"
          onChange={handleOnChangeEmail}
        />
        <Input
          placeholder="Confirm"
          name="confirm"
          onChange={handleOnChangeEmail}
        />
            <label htmlFor="showPass" className="flex gap-2">
                <input type="checkbox" />
                <p>Show password</p>
            </label>
      </div>
      <Button>Let's Go</Button>
      <div className="flex gap-2">
        <p>Already have an account?</p>
        <Link href={`/login`}>
          <p className="text-[#2563EB]">Log in</p>
        </Link>
      </div>
    </div>
  );
};
