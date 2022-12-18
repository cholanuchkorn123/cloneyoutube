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
    <section className="flex-1 bg-[#cca89a] dark:bg-[#443833] h-screen text-white text-sm sticky top-0">
      <div className="pt-[18px] pb-[18px] pr-[26px] pl-[26px]">
        <Link to="/">
          <div className="flex  items-center  gap-[5px] font-bold mb-[25px] text-[#2d2a22] dark:text-white">
            <img className="h-[25px]" src={logo} />
            Practicetube
          </div>
        </Link>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <HomeIcon className="text-[#2d2a22] dark:text-white" /> Home
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          {" "}
          <ExploreIcon className="text-[#2d2a22] dark:text-white" />
          Explore
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <SubscriptionsIcon className="text-[#2d2a22] dark:text-white" />{" "}
          Subscription
        </div>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-[0.5px] border-solid border-[#f7ebe6]" />
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <VideoLibraryIcon className="text-[#2d2a22]  dark:text-white" />{" "}
          Library
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          {" "}
          <HistoryIcon className="text-[#2d2a22] dark:text-white" />
          History
        </div>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#ffffff]" />
        <div className="flex flex-col text-[#2d2a22] dark:text-white">
          Sign in to like video, comment and subscribe
          <button className="flex items-center gap-[5px] mt-[10px] w-[120px] pt-[5px] pb-[5px] pr-[15px] pl-[15px] bg-transparent border-[1px] border-[#fcf8f7] text-[#fcf8f7] font-medium">
            <AccountCircleIcon />
            SIGN IN
          </button>
        </div>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#ffffff]" />
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <LibraryMusicIcon className="text-[#2d2a22] dark:text-white" /> Music
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <SportsBasketballIcon className="text-[#2d2a22] dark:text-white " />{" "}
          Sports
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px text-[#2d2a22] dark:text-white">
          <SportsEsportsIcon className="text-[#2d2a22]  dark:text-white" />{" "}
          Games
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <MovieCreationIcon className="text-[#2d2a22]  dark:text-white" />{" "}
          Movies
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <ArticleIcon className="text-[#2d2a22]  dark:text-white" /> News
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <LiveTvIcon className="text-[#2d2a22] dark:text-white" /> Live
        </div>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#ffffff]" />
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <SettingsApplicationsIcon className="text-[#2d2a22] dark:text-white" />{" "}
          Settings
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <FlagIcon className="text-[#2d2a22] dark:text-white" /> Report
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white">
          <HelpIcon className="text-[#2d2a22] dark:text-white" /> Help
        </div>
        <div
          className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22] dark:text-white"
          onClick={handleThemeswitch}
        >
          <LightModeIcon className="text-[#2d2a22] dark:text-white" /> LightMode
        </div>
      </div>
    </section>
  );
}
