import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button(props: ButtonProps) {
  return (
    <input
      disabled={props.disabled}
      onClick={props.onClick}
      value="Add Task"
      type="button"
      className="disabled:cursor-not-allowed disabled:bg-apps-button/70 cursor-pointer hover:bg-apps-button/80 transition-all duration-300 relative px-[17px] bg-apps-button text-white py-[6px] text-[14px] rounded-[12px] w-[100px] capitalize"
    />
  );
}
