import { SignUp } from "@/components/SignUp";
import { SignUpStep2 } from "@/components/SignUpStep2";

import { LogIn } from "@/components/LogIn";

export default function Home() {
  return (
    <div className="flex w-screen items-center justify-center py-5 ">
      <div className="flex w-[1300px] items-center justify-center gap-5">
      <SignUpStep2/>
      {/* <LogIn/> */}
      <img src="mainImage.png" alt="" />
      </div>
    </div>
  );
}
