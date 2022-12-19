import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Comments } from "../components/Comments";
import { Comment } from "../components/Comment";
import { Card } from "../components/Card";
export function Video() {
  return (
    <section className="dark:text-white flex gap-[24px]">
      <content className="flex-[5_5_0%]">
        <wrapper>
          <video
            className="w-full h-[720]"
            src="https://www.youtube.com/watch?v=nF1fSKEiyA0"
            allow="acc"
            allowFullScreen
          ></video>
        </wrapper>
        <h1 className="font-bold text-[18px] mt-[20px] mb-[10px] ">
          {" "}
          Test video
        </h1>
        <detial className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-white">
            785,500,600 views Jun 22,2022{" "}
          </span>
          <div className="flex gap-[20px]">
            <div className="flex items-center gap-[5px]">
              <button>
                <ThumbUpIcon />
                480
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <button>
                <ThumbDownIcon />
                Dislike
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <button>
                <ReplyIcon />
                Share
              </button>
            </div>
            <div className="flex items-center gap-[5px]">
              <button>
                <AddTaskIcon />
                Save
              </button>
            </div>
          </div>
        </detial>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#ffffff]" />
        <div className="flex justify-between">
          <div classname="flex gap-[20px] ">
            <img
              className="w-[50px] h-[50px] rounded-[50%]"
              src="http://cdn.shopify.com/s/files/1/1382/2223/articles/dog1_0fe8fd5d-09bf-444b-b39b-9fb1757577a0_1024x1024.png?v=1614623029"
            />
            <div className="flex flex-col ">
              <h1 className="font-bold">Channal name</h1>
              <span className="text-[12px] mt-[5px] mb-[20px]">
                800k subscriber
              </span>
              <p className="text-[14px]">
                I want to be neenja I want to be neenja I want to chop chop chop
                chow...
              </p>
            </div>
          </div>
          <button className="bg-[#887067] text-white font-bold border-none rounded-[3px] h-max pt-[10px] pb-[10px] pr-[20px] pl-[20px]">
            {" "}
            SUBSCRIBE
          </button>
        </div>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#ffffff]" />
        <Comments />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </content>
      <recommend className="flex-[2_2_0%]">
        <Card className="type-sm" type={"sm"} />
        <Card className="type-sm" type={"sm"} />
        <Card className="type-sm" type={"sm"} />
        <Card className="type-sm" type={"sm"} />
        <Card className="type-sm" type={"sm"} />
        <Card className="type-sm" type={"sm"} />{" "}
        <Card className="type-sm" type={"sm"} />
        <Card className="type-sm" type={"sm"} />
        <Card className="type-sm" type={"sm"} />
        <Card className="type-sm" type={"sm"} />
        <Card className="type-sm" type={"sm"} />
      </recommend>
    </section>
  );
}
