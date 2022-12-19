import React from "react";
export function Comments() {
  return (
    <section>
      <div className="flex items-center gap-[10px]">
        <img
          className="w-[50px] h-[50px] rounded-[50%]"
          src="http://cdn.shopify.com/s/files/1/1382/2223/articles/dog1_0fe8fd5d-09bf-444b-b39b-9fb1757577a0_1024x1024.png?v=1614623029"
        />
        <input
          placeholder="Add a comment"
          className="outline-0 bg-transparent border-b-[#ffffff] border-b-[1px] p-[5px] w-[100%]"
        />
      </div>
    </section>
  );
}
