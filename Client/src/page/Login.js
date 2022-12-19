import React from "react";
export function Login() {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-56px)] flex-col dark:text-white">
      <wrapper className="flex items-center flex-col bg-[#e9c9bc] pt-[20px] pb-[20px] pl-[50px] pr-[50px] border-[#eed6cd] border-[1px] gap-[10px]">
        <span className="text-[24px]">Sign in</span>
        <span className="text-[20px] font-light">
          to continue to Practicetube
        </span>
        <input
          placeholder="username"
          className="border-[1px] border-[#f4e4dd] bg-transparent rounded-[3px] p-[10px] w-full"
        />
        <input
          placeholder="password"
          type="password"
          className="border-[1px] border-[#f4e4dd] bg-transparent rounded-[3px] p-[10px] w-full"
        />
        <button className="border-[1px] border-[#f4e4dd]  rounded-[3px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#f1ddd5]">
          {" "}
          Sign in
        </button>
        <span className="text-[24px]">or</span>
        <input
          placeholder="username"
          className="border-[1px] border-[#f4e4dd] bg-transparent rounded-[3px] p-[10px] w-full"
        />
        <input
          placeholder="email"
          className="border-[1px] border-[#f4e4dd] bg-transparent rounded-[3px] p-[10px] w-full"
        />
        <input
          placeholder="password"
          type="password"
          className="border-[1px] border-[#f4e4dd] bg-transparent rounded-[3px] p-[10px] w-full"
        />
        <button className="border-[1px] border-[#f4e4dd]  rounded-[3px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#f1ddd5]">
          Sign up
        </button>
      </wrapper>
      <div className="flex text-[12px] mt-[10px]">
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
