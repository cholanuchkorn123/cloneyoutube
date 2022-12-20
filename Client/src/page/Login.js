import React from "react";
export function Login() {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-56px)] flex-col dark:text-white ">
      <wrapper className="flex items-center flex-col bg-[#e9c9bc] pt-[50px] pb-[50px] pl-[120px] dark:bg-[#443833] rounded-[3px] pr-[120px] border-[#eed6cd] border-[1px] gap-[10px]">
        <span className="text-[30px]">Sign in</span>
        <span className="text-[16px] font-light">
          to continue to Practicetube
        </span>
        <input
          placeholder="username"
          className="border-[1px] border-[#f4e4dd] bg-[#f7ebe6] rounded-[3px] p-[10px] w-full"
        />
        <input
          placeholder="password"
          type="password"
          className="border-[1px] border-[#f4e4dd] bg-[#f7ebe6] rounded-[3px] p-[10px] w-full"
        />
        <button className="border-[1px] border-[#f4e4dd]  rounded-[6px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#f1ddd5] mt-[5px] dark:text-black hover:bg-[#e9c9bc]">
          {" "}
          Sign in
        </button>
        <span className="text-[30px]">or</span>
        <input
          placeholder="username"
          className="border-[1px] border-[#f4e4dd] bg-[#f7ebe6] rounded-[3px] p-[10px] w-full"
        />
        <input
          placeholder="email"
          className="border-[1px] border-[#f4e4dd] bg-[#f7ebe6] rounded-[3px] p-[10px] w-full"
        />
        <input
          placeholder="password"
          type="password"
          className="border-[1px] border-[#f4e4dd] bg-[#f7ebe6] rounded-[3px] p-[10px] w-full"
        />
        <button className="border-[1px] border-[#f4e4dd]  rounded-[6px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#f1ddd5] mt-[5px] dark:text-black hover:bg-[#e9c9bc]">
          Sign up
        </button>
      </wrapper>
      <div className="flex text-[12px] mt-[10px] cursor-pointer">
        English(US)
        <div className="ml-[50px]">
          <span className="ml-[30px]">Help</span>
          <span className="ml-[30px]"> Privacy</span>
          <span className="ml-[30px]"> Terms</span>
        </div>
      </div>
    </section>
  );
}
