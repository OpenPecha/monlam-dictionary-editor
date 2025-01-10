import React from "react";
import { UseFormRegister } from "react-hook-form";
import { InputWord } from "../types/type";

interface Props {
  register: UseFormRegister<InputWord>;
  value: string;
}

const Toggle: React.FC<Props> = ({ register, value }) => {
  const registerProps =
    value === "is_mordern" ? register("is_mordern") : register("is_frequent");
  return (
    <div>
      <div className=" ml-2 mt-3 flex items-center justify-center">
        <label className="relative inline-block w-12 h-6 cursor-pointer">
          <input type="checkbox" className="sr-only peer" {...registerProps} />
          <span className="block w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500"></span>
          <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
