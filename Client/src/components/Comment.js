import React from "react";
export function Comment() {
  return (
    <section className="flex gap-[10px] mt-[30px] mb-[30px]">
      <img
        className="w-[50px] h-[50px] rounded-[50%]"
        src="http://cdn.shopify.com/s/files/1/1382/2223/articles/dog1_0fe8fd5d-09bf-444b-b39b-9fb1757577a0_1024x1024.png?v=1614623029"
      />
      <div className=" flex flex-col gap-[10px]">
        {" "}
        <span className="font-bold text-[14px]">
          Name{" "}
          <span className="font-normal text-[12px] ml-[5px]"> 8 month ago</span>
        </span>
        <span className="text-[14px]">
          I want to be neenja I want to be neenja I want to chop chop chop chow
          down take chow down to china town I want to be neenja I started
          training hard I think I could go far I am a natural thats
          matterfactual I learned to chop real hard
        </span>
      </div>
    </section>
  );
}
