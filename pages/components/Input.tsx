import React, { ReactHTMLElement } from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  return (
    <input
      type="text"
      name="task"
      value={props.value}
      onChange={props.onChange}
      className="w-[287px] rounded-[12px] px-[11px] text-[14px] font-[400] leading-[17px] flex items-center h-[37px]"
      placeholder="Add Task... "
    />
  );
}
