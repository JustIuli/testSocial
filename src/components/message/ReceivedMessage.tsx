import { Avatar } from "@nextui-org/react";
import React from "react";

const ReceivedMessage = () => {
  return (
    <div className="flex items-end space-x-4">
      <Avatar size="sm" src={"https://i.pravatar.cc/150?img=32"} />
      <div>
        <div className="bg-[#1E2126] max-w-[300px] md:max-w-[400px] px-4 flex-grow w-96 p-2 text-sm text-neutral-300 rounded-xl">
          <p className="text-violet-500 py-1 font-light text-[18px]">
            John Doe
          </p>
          <p className="text-[17px] font-OpenSans text-[#DBDEE1] text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            modi quam deleniti facilis iusto distinctio, deserunt, nemo
            provident voluptatibus cupiditate vero sunt. Optio repudiandae quo
            perspiciatis quos adipisci aliquid consectetur.
          </p>
        </div>
        <div
          className="px-1 flex
     max-w-[400px] flex p-1"
        >
          <div className="flex space-x-1.5 bg-[#1E2126] px-2 text-neutral-400 rounded-lg">
            <div className="flex space-x-2">
              <img
                src="https://placehold.co/10"
                height={15}
                width={15}
                alt=""
              />
              <p>3</p>
            </div>
            <div className="flex space-x-2">
              <img
                src="https://placehold.co/10"
                height={15}
                width={15}
                alt=""
              />
              <p>3</p>
            </div>
            <div className="flex space-x-2">
              <img
                src="https://placehold.co/10"
                height={15}
                width={15}
                alt=""
              />
              <p>3</p>
            </div>
            <div className="flex space-x-2">
              <img
                src="https://placehold.co/10"
                height={15}
                width={15}
                alt=""
              />
              <p>3</p>
            </div>
            <div className="flex space-x-2">
              <img
                src="https://placehold.co/10"
                height={15}
                width={15}
                alt=""
              />
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
