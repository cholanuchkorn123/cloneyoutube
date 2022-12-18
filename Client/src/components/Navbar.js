import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
export function Navbar() {
  return (
    <section className="sticky top-0 h-[56px] bg-[#eed6cd] dark:bg-[#5b4b44]">
      <div className="flex items-center h-full pt-[18px] pb-[18px] pr-[26px] pl-[26px] justify-end relative">
        <div className="absolute w-[40%] left-0 right-0 m-auto flex items-center justify-between p-[5px] border-solid border-[1px] border-[#ccc] rounded-[3px] ">
          <input placeholder="Search " className="outline-0 bg-transparent  " />
          <SearchIcon />
        </div>
        <button className="flex items-center gap-[5px]  w-[150px] pt-[5px] pb-[5px] pr-[15px] pl-[15px] bg-transparent border-[1px] border-[#9f8378] text-[#9f8378] font-medium dark:border-white dark:text-white ">
          <AccountCircleIcon />
          SIGN IN
        </button>
      </div>
    </section>
  );
}
