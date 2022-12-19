import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <section className="sticky top-0 h-[56px] bg-[#eed6cd] dark:bg-[#5b4b44] z-10 border-b-[1px] border-[#9f8378] ">
      <div className="flex items-center h-full pt-[18px] pb-[18px] pr-[26px] pl-[26px] justify-end relative sticky top-0 ">
        <div className="absolute w-[40%] left-0 right-0 m-auto flex items-center justify-between p-[5px] border-solid border-[1px] border-[#ccc] rounded-[20px] hover:scale-110 hover:bg-[#f1ddd5]">
          <input
            placeholder="Search "
            className="outline-0 bg-transparent  ml-[15px]"
          />
          <button className="hover:text-gray-500">
            {" "}
            <SearchIcon />
          </button>
        </div>
        <Link to="/signin">
          <button className="flex items-center gap-[5px]  w-[150px] pt-[5px] pb-[5px] pr-[15px] pl-[15px] bg-transparent border-[1px] border-[#9f8378] text-[#9f8378] font-medium dark:border-white dark:text-white rounded-[10px] hover:bg-[#f1ddd5] hover:scale-110">
            <AccountCircleIcon className="mr-[5px]" />
            SIGN IN
          </button>
        </Link>
      </div>
    </section>
  );
}
