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
export function Menu() {
  return (
    <section className="flex-1 bg-[#cca89a] h-screen text-white text-sm sticky top-0">
      <div className="pt-[18px] pb-[18px] pr-[26px] pl-[26px]">
        <div className="flex  items-center  gap-[5px] font-bold mb-[25px] text-[#2d2a22]">
          <img className="h-[25px]" src={logo} />
          Practicetube
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <HomeIcon className="text-[#2d2a22] " /> Home
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          {" "}
          <ExploreIcon className="text-[#2d2a22]" />
          Explore
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <SubscriptionsIcon className="text-[#2d2a22] " /> Subscription
        </div>
        <br className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#373737]" />
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <VideoLibraryIcon className="text-[#2d2a22] " /> Library
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          {" "}
          <HistoryIcon className="text-[#2d2a22]" />
          History
        </div>
        <br className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#373737]" />
        <div className="flex flex-col text-[#2d2a22]">
          Sign in to like video, comment and subscribe
          <button className="flex items-center gap-[5px] mt-[10px] w-[120px] pt-[5px] pb-[5px] pr-[15px] pl-[15px] bg-transparent border-[1px] border-[#fcf8f7] text-[#fcf8f7] font-medium">
            <AccountCircleIcon />
            SIGN IN
          </button>
        </div>
        <br className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#373737]" />
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <LibraryMusicIcon className="text-[#2d2a22] " /> Music
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <SportsBasketballIcon className="text-[#2d2a22] " /> Sports
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px text-[#2d2a22]">
          <SportsEsportsIcon className="text-[#2d2a22] " /> Games
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <MovieCreationIcon className="text-[#2d2a22] " /> Movies
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <ArticleIcon className="text-[#2d2a22] " /> News
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <LiveTvIcon className="text-[#2d2a22] " /> Live
        </div>
        <br className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#373737]" />
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <SettingsApplicationsIcon className="text-[#2d2a22] " /> Settings
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <FlagIcon className="text-[#2d2a22] " /> Report
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <HelpIcon className="text-[#2d2a22] " /> Help
        </div>
        <div className="flex flex-row items-center gap-[20px] cursor-pointer pt-[7.5px] pb-[7.5px] pr-[0px] pl-[0px] text-[#2d2a22]">
          <LightModeIcon className="text-[#2d2a22] " /> LightMode
        </div>
      </div>
    </section>
  );
}
