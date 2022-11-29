import React from 'react';

type TaskProps = {
  index: number;
  item: any;
  handlerRemoveTask: (index: number) => void;
};

export default function Task(props: TaskProps) {
  console.log(props.item);
  return (
    <li className="relative flex-shrink-0 w-[370px] h-[202px] bg-white rounded-[16px] flex justify-center items-center">
      {/* Button remove */}
      <div
        onClick={() => props.handlerRemoveTask(props.index)}
        className="group absolute top-[20px] right-[20px] text-apps-danger cursor-pointer h-fit w-fit p-2">
        <hr className="absolute top-0 h-[20px] border-[1px] rounded-full border-red-500 transform rotate-45 group-hover:border-red-700 transition-all duration-300" />
        <hr className="h-[20px] border-[1px] rounded-full border-red-500 transform -rotate-45 absolute top-0 group-hover:border-red-700 transition-all duration-300" />
      </div>
      {/* Title Content */}
      <h1 className="text-[32px] leading-[39px] font-[400] text-center capitalize">
        {props.item}
      </h1>
    </li>
  );
}
