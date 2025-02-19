import { SignUp } from "@/components/SignUp";
export default function Home() {
  return (
    <div className="flex w-screen items-center justify-center py-5 ">
      <div className="flex w-[1300px] items-center justify-center gap-5">
      <SignUp/>
      <img src="mainImage.png" alt="" />
      </div>
    </div>
  );
}
