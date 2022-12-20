import React from "react";
import logo from "../img/youtube-logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function Menu() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  console.log(theme);
  const handleThemeswitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <section className="flex-1 bg-[#eed6cd] dark:bg-[#443833] h-screen text-white text-sm sticky top-0 border-r-[1px] border-[#9f8378]">
      <div className="pt-[18px] pb-[18px] pr-[26px] pl-[26px] sticky top-0">
        <Link to="/">
          <div className="flex  items-center  gap-[5px] hover:rounded-[10px]  font-bold mb-[25px] text-[#2d2a22] dark:text-white text-[18px] hover:scale-105">
            <img className="h-[25px]" src={logo} />
            Practicetube
          </div>
        </Link>
        <Link to="/">
          <div className="flex flex-row hover:bg-[#cca89a] hover:rounded-[10px]  items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
            <HomeIcon className="text-[#2d2a22] dark:text-white" /> Home
          </div>
        </Link>
        <div className="flex flex-row items-center hover:bg-[#cca89a] hover:rounded-[10px] gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          {" "}
          <ExploreIcon className="text-[#2d2a22] dark:text-white" />
          Explore
        </div>
        <div className="flex flex-row items-center hover:bg-[#cca89a] hover:rounded-[10px]  gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <SubscriptionsIcon className="text-[#2d2a22] dark:text-white" />{" "}
          Subscription
        </div>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-[0.5px] border-solid border-[#f7ebe6]" />
        <div className="flex flex-row items-center hover:bg-[#cca89a]  hover:rounded-[10px] gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <VideoLibraryIcon className="text-[#2d2a22]  dark:text-white" />{" "}
          Library
        </div>
        <div className="flex flex-row items-center hover:bg-[#cca89a] hover:rounded-[10px]   gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          {" "}
          <HistoryIcon className="text-[#2d2a22] dark:text-white" />
          History
        </div>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#ffffff]" />
        <div className="flex flex-col text-[#2d2a22]  dark:text-white ">
          Sign in to like video, comment and subscribe
          <Link to="/signin">
            <button className="flex items-center  hover:bg-[#cca89a] hover:rounded-[10px] rounded-[10px] dark:text-white gap-[5px] mt-[10px] w-[120px] pt-[5px] pb-[5px] pr-[15px] pl-[15px] bg-transparent border-[1px] border-[#fcf8f7] text-[#000000] font-medium ml-[20px] hover:scale-105">
              <AccountCircleIcon />
              SIGN IN
            </button>
          </Link>
        </div>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#ffffff]" />
        <div className="flex flex-row items-center gap-[20px] hover:rounded-[10px] hover:bg-[#cca89a]  cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <LibraryMusicIcon className="text-[#2d2a22] dark:text-white" /> Music
        </div>
        <div className="flex flex-row items-center gap-[20px] hover:bg-[#cca89a] hover:rounded-[10px]  cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <SportsBasketballIcon className="text-[#2d2a22] dark:text-white " />{" "}
          Sports
        </div>
        <div className="flex flex-row items-center gap-[20px] hover:bg-[#cca89a] hover:rounded-[10px]  cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px text-[#2d2a22] dark:text-white hover:scale-105">
          <SportsEsportsIcon className="text-[#2d2a22]  dark:text-white" />{" "}
          Games
        </div>
        <div className="flex flex-row items-center gap-[20px] hover:bg-[#cca89a] hover:rounded-[10px]  cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <MovieCreationIcon className="text-[#2d2a22]  dark:text-white" />{" "}
          Movies
        </div>
        <div className="flex flex-row items-center gap-[20px] hover:bg-[#cca89a] hover:rounded-[10px]  cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <ArticleIcon className="text-[#2d2a22]  dark:text-white" /> News
        </div>
        <div className="flex flex-row items-center gap-[20px] hover:bg-[#cca89a] hover:rounded-[10px]  cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <LiveTvIcon className="text-[#2d2a22] dark:text-white" /> Live
        </div>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#ffffff]" />
        <div className="flex flex-row items-center gap-[20px] hover:bg-[#cca89a]  hover:rounded-[10px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <SettingsApplicationsIcon className="text-[#2d2a22] dark:text-white" />{" "}
          Settings
        </div>
        <div className="flex flex-row items-center gap-[20px] hover:bg-[#cca89a] hover:rounded-[10px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <FlagIcon className="text-[#2d2a22] dark:text-white" /> Report
        </div>
        <div className="flex flex-row items-center gap-[20px] hover:bg-[#cca89a] hover:rounded-[10px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105">
          <HelpIcon className="text-[#2d2a22] dark:text-white" /> Help
        </div>
        <div
          className="flex flex-row items-center gap-[20px] hover:bg-[#cca89a] hover:rounded-[10px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white hover:scale-105"
          onClick={handleThemeswitch}
        >
          <LightModeIcon className="text-[#2d2a22] dark:text-white" />{" "}
          {theme === "light" ? "Dark" : "Light"}Mode
        </div>
      </div>
    </section>
  );
}
