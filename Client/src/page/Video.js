import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import AddTaskIcon from "@mui/icons-material/AddTask";
export function Video() {
  return (
    <section className="dark:text-white flex gap-[24px]">
      <content className="flex-[5_5_0%]">
        <wrapper>
          <iframe
            className="w-full h-[720]"
            src="https://www.youtube.com/watch?v=k3Vfj-e1Ma4"
            allow="acc"
            allowFullScreen
          ></iframe>
        </wrapper>
        <h1 className="font-normal text-[18px] mt-[20px] mb-[10px] ">
          {" "}
          Test video
        </h1>
        <detial className="flex items-center justify-between">
          <span className="text-gray-600">785,500,600 views Jun 22,2022 </span>
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
      </content>
      <recommend className="flex-[2_2_0%]">recommend</recommend>
    </section>
  );
}
