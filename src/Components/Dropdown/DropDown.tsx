import React from "react";

interface ChildProps {
  options: string[];
  setSelect: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown: React.FC<ChildProps> = ({ options, setSelect, setOpen }) => {
  return (
    <div className=" z-20 absolute mt-2 border w-56 overflow-y-scroll bg-white border-black">
      {options.map((item, index) => (
        <div
          key={index}
          className=" flex items-center border-b border-black font-monlam p-2 hover:bg-slate-100 cursor-pointer text-sm"
          onClick={() => {
            setSelect(item);
            setOpen((pre) => !pre);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
