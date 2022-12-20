import React from "react";
import { useState } from "react";
export function Comment() {
  const [readmore, setReadmore] = useState("readless");
  const cut = (t) => {
    t = t.slice(0, 70);
    return t;
  };

  const handleReadmore = (e) => {
    readmore === "readless" ? setReadmore("readmore") : setReadmore("readless");
  };
  return (
    <section className="flex gap-[10px] mt-[30px] mb-[30px]">
      <img
        className="w-[50px] h-[50px] rounded-[50%]"
        src="http://cdn.shopify.com/s/files/1/1382/2223/articles/dog1_0fe8fd5d-09bf-444b-b39b-9fb1757577a0_1024x1024.png?v=1614623029"
      />
      <div className=" flex flex-col gap-[10px] ml-[10px]">
        {" "}
        <span className="font-bold text-[16px]">
          Name{" "}
          <span className="text-gray-600 font-medium ml-[5px] text-[14px]">
            {" "}
            8 month ago
          </span>
        </span>
        <span className="text-[12px] cursor-pointer" onClick={handleReadmore}>
          {readmore === "readless" && (
            <div className="flex flex-col font-normal text-[14px]">
              {cut(
                "I want to be neenja I want to be neenja I want to chopchop chop chowdown take chow down to china town I want to beneenja I startedtraining hard I think I could go far I am anatural thatsmatterfactual I learned to chop real hard"
              )}{" "}
              ...
              <div className="mt-[10px] font-bold text-[16px]">Show more</div>
            </div>
          )}
          {readmore === "readmore" && (
            <span className="flex flex-col font-normal text-[14px]">
              I want to be neenja I want to be neenja I want to chop chop chop
              chowdown take chow down to china town I want to be neenja I
              startedtraining hard I think I could go far I am a natural
              thatsmatterfactual I learned to chop real hard
              <span className="mt-[10px] font-bold text-[16px]">Show less</span>
            </span>
          )}
        </span>
      </div>
    </section>
  );
}
