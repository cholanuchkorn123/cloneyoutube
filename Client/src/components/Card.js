import React from "react";
import { Link } from "react-router-dom";
export function Card({ type }) {
  const cut = (t) => {
    t = t.slice(0, 50);
    return t;
  };
  const cuts = (t) => {
    t = t.slice(0, 40);
    return t;
  };
  return (
    <Link to="/video/test">
      {(type === "sm" && (
        <section className=" mt-[10px] cursor-pointer flex gap-[10px] ">
          <img
            src="https://d.newsweek.com/en/full/2096410/chihuahua-does-tricks.jpg?w=1600&h=900&q=88&f=588166ac22e26c4e969202bda4aeeca0"
            className="w-full h-[120px] bg-[#999] flex-1 rounded-[10px]"
          />
          <detial className="flex  gap-[10px] flex-1">
            <content>
              <h1 className="font-bold  text-[16px] dark:text-white ">
                {cuts(
                  "I want to be neenja I want to be neenja I want to chop chop chopchow"
                ) + "..."}
              </h1>
              <h2 className="text-[14px] dark:text-white mt-[9px] text-gray-600 font-semibold ">
                Chanal name
              </h2>
              <info className="text-[14px] dark:text-white  mb-[9px] text-gray-600 font-semibold">
                999999 view 5 hour ago
              </info>
            </content>
          </detial>
        </section>
      )) || (
        <section className="w-[360px] mt-[45px] cursor-pointer gap-[10px] hover:scale-110">
          <img
            src="https://d.newsweek.com/en/full/2096410/chihuahua-does-tricks.jpg?w=1600&h=900&q=88&f=588166ac22e26c4e969202bda4aeeca0"
            className="w-full h-[202px] bg-[#999] rounded-[10px]"
          />
          <detial className="flex mt-[16px] gap-[12px]">
            <img
              src="http://cdn.shopify.com/s/files/1/1382/2223/articles/dog1_0fe8fd5d-09bf-444b-b39b-9fb1757577a0_1024x1024.png?v=1614623029"
              className="w-[45px] h-[45px] rounded-[50%] bg-[#999]"
            />
            <content>
              <h1 className="font-bold  text-[16px] dark:text-white">
                {cut(
                  "I want to be neenja I want to be neenja I want to chop chop chopchow"
                ) + "..."}
              </h1>
              <h2 className="text-[14px] dark:text-white mt-[9px]  text-gray-600 font-semibold">
                Tero Music
              </h2>
              <info className="text-[14px] dark:text-white  mb-[9px] text-gray-600 font-medium">
                103k views 5 hours ago
              </info>
            </content>
          </detial>
        </section>
      )}
    </Link>
  );
}
