import React, { useState } from "react";
import DropDown from "../Dropdown/DropDown";

const AuthorPopup = () => {
  const [typeOpen, setTypeOpen] = useState<boolean>(false);
  const [typeOption, setTypeOption] = useState<string[]>([
    "གདམ་ཀ ༡",
    "གདམ་ཀ ༢",
    "གདམ་ཀ ༣",
  ]);
  const [typeSelected, setTypeSelected] = useState<string>("");
  return (
    <div>
      <div className=" fixed inset-0 flex items-center justify-center bg-grey-800 bg-opacity-50 z-50">
        <div className=" bg-white border-black border-2 p-12 rounded-xl w-10/12 h-5/6">
          <div className=" flex justify-between">
            <p className=" font-monlam text-2xl">རྩོམ་སྒྲིག་པ་མིང་།</p>
            <div>X</div>
          </div>
          <div
            className=" flex items-center border-b border-black mt-9 pb-2 w-1/4 cursor-pointer"
            onClick={() => setTypeOpen((pre) => !pre)}
          >
            <label
              className=" text-lg font-monlam cursor-pointer"
              onClick={() => setTypeOpen((pre) => !pre)}
            >
              རིགས།
            </label>
            <p className=" font-monlam text-1xl ml-8">{typeSelected}</p>
          </div>
          <div>
            {typeOpen ? (
              <DropDown
                options={typeOption}
                setSelect={setTypeSelected}
                setOpen={setTypeOpen}
              />
            ) : (
              ""
            )}
          </div>
          <div className=" flex items-center border-b border-black mt-3 pb-2 w-2/4">
            <label className=" text-lg font-monlam">མིང་།</label>
            <input className=" ml-14 outline-none mt-2 text-2xl w-96"></input>
          </div>
          <div className=" flex items-center border-b border-black mt-3 pb-2 w-1/4">
            <label className=" text-lg font-monlam">སྐྱེས་ལོ།</label>
            <input
              placeholder="DD/MM/YYYY"
              className=" ml-11 outline-none mt-2 text-1xl"
            ></input>
          </div>
          <div className=" flex items-center border-b border-black mt-3 pb-2 w-1/4">
            <label className=" text-lg font-monlam w-2/4">འདས་ལོ།</label>
            <input
              placeholder="DD/MM/YYYY"
              className=" ml-8 outline-none mt-2 text-1xl w-96"
            ></input>
          </div>
          <div className=" flex items-center border-b border-black mt-3 pb-2 w-2/4">
            <label className=" text-lg font-monlam">མི་རིགས།</label>
            <input className=" ml-8 outline-none mt-2 text-2xl w-96"></input>
          </div>
          <button className=" fixed bottom-[100px] right-[180px] bg-slate-400 pl-7 pr-7 pt-2 pb-2 rounded-md hover:opacity-80 active:opacity-50 font-monlam">
            ཉར་ཚགས།
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorPopup;
