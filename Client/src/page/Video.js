import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Comments } from "../components/Comments";
import { Comment } from "../components/Comment";
import { Card } from "../components/Card";
import { useState } from "react";
export function Video() {
  const [readmore, setReadmore] = useState("readless");
  const cut = (t) => {
    t = t.slice(0, 85);
    return t;
  };

  const handleReadmore = (e) => {
    readmore === "readless" ? setReadmore("readmore") : setReadmore("readless");
  };
  return (
    <section className="dark:text-white flex gap-[24px] m-[30px]">
      <content className="flex-[5_5_0%]">
        <wrapper>
          <video
            className="w-full h-[720]"
            src="https://www.youtube.com/watch?v=nF1fSKEiyA0"
            allow="acc"
            allowFullScreen
          ></video>
        </wrapper>
        <h1 className="font-bold text-[18px] mt-[20px] mb-[5px] ">
          {" "}
          Test video
        </h1>
        <detial className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-white">
            785,500,600 views Jun 22,2022{" "}
          </span>
          <div className="flex gap-[20px] ">
            <div className="flex items-center gap-[5px] dark:bg-gray-800  rounded-[25px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#eed6cd] hover:bg-[#e9c9bc] ">
              <button>
                <ThumbUpIcon className="mr-[10px]" />
                480
              </button>
            </div>
            <div className="flex items-center gap-[5px] dark:bg-gray-800 rounded-[25px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#eed6cd] hover:bg-[#e9c9bc]">
              <button>
                <ThumbDownIcon className="mr-[10px]" />
                Dislike
              </button>
            </div>
            <div className="flex items-center gap-[5px] dark:bg-gray-800 rounded-[25px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#eed6cd] hover:bg-[#e9c9bc]">
              <button>
                <ReplyIcon className="mr-[10px]" />
                Share
              </button>
            </div>
            <div className="flex items-center gap-[5px] dark:bg-gray-800 rounded-[25px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#eed6cd] hover:bg-[#e9c9bc]">
              <button>
                <AddTaskIcon className="mr-[10px]" />
                Save
              </button>
            </div>
          </div>
        </detial>
        <hr className="mt-[15px] mb-[15px] mr-[0px] ml-[0px] border-t-[0.5px ] border-[#ffffff]" />
        <div className="flex justify-between">
          <div classname="flex gap-[20px]  ">
            <img
              className="w-[50px] h-[50px] rounded-[50%]"
              src="http://cdn.shopify.com/s/files/1/1382/2223/articles/dog1_0fe8fd5d-09bf-444b-b39b-9fb1757577a0_1024x1024.png?v=1614623029"
            />

            <div className="flex flex-col mt-[5px]">
              <h1 className="font-bold">Channal name</h1>
              <span className="text-[12px] mt-[5px] mb-[20px]">
                800k subscriber
              </span>
              <div
                className="text-[14px] cursor-pointer bg-[#f4e4dd] p-[30px]  rounded-[8px] dark:bg-gray-800"
                onClick={handleReadmore}
              >
                {readmore === "readless" && (
                  <div className="flex flex-col">
                    {cut(
                      "I want to be neenja I want to be neenja I want to chopchop chop chowdown take chow down to china town I want to beneenja I startedtraining hard I think I could go far I am anatural thatsmatterfactual I learned to chop real hard"
                    )}{" "}
                    ...
                    <div className="mt-[10px] font-bold text-[16px]">
                      Show more
                    </div>
                  </div>
                )}

                {readmore === "readmore" && (
                  <span className="flex flex-col ">
                    I want to be neenja I want to be neenja I want to chop chop
                    chop chowdown take chow down to china town I want to be
                    neenja I startedtraining hard I think I could go far I am a
                    natural thatsmatterfactual I learned to chop real hard
                    <span className="mt-[10px] font-bold text-[16px]">
                      Show less
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <button className="bg-[#887067] dark:bg-gray-800 text-white font-bold border-none rounded-[3px] h-max pt-[10px] pb-[10px] pr-[20px] pl-[20px] hover:bg-[#e9c9bc] rounded-[5px]">
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
