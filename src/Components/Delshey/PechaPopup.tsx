import React, { useState } from "react";
import DropDown from "../Dropdown/DropDown";

const PechaPopup = () => {
  const [optionOpen, setOptionOpen] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string>("");
  const [option, setOption] = useState<string[]>([
    "གདམ་ཀ 1",
    "གདམ་ཀ ༢",
    "གདམ་ཀ ༣",
  ]);
  return (
    <div>
      <div className=" fixed inset-0 flex items-center justify-center bg-grey-800 bg-opacity-50 z-50">
        <div className=" bg-white border-black border-2 p-12 rounded-xl w-10/12 h-5/6">
          <div className=" flex justify-between">
            <p className=" font-monlam text-2xl">དཔེ་ཆ།</p>
            <div>X</div>
          </div>
          <div className=" flex items-center border-b border-black mt-9 pb-2 w-1/3">
            <label className=" text-lg font-monlam w-2/4">མཚན་བྱང་།</label>
            <input className=" ml-2 outline-none mt-2 text-2xl w-96"></input>
          </div>
          <div className="flex w-2/4">
            <div className=" flex items-center border-b border-black mt-3 pb-2 w-3/4">
              <label className=" text-lg w-36 font-monlam">
                མཚན་བྱང་བསྡུས་པ།
              </label>
              <input className=" ml-4 outline-none mt-2 text-2xl w-64"></input>
            </div>
            <div className=" flex items-center border-b border-black mt-3 ml-2 pb-2">
              <label className=" text-lg w-36 font-monlam">པར་སྐྲུན་ལོ།</label>
              <input
                placeholder="DD/MM/YYYY"
                className=" placeholder:text-sm ml-4 outline-none mt-2 text-2xl w-48"
              ></input>
            </div>
          </div>
          <div className="flex w-2/4">
            <div className=" flex items-center border-b border-black mt-3 pb-2 w-3/4">
              <label className=" text-lg w-36 font-monlam">
                རྩོམ་སྒྲིག་གི་རྣམ་པ།
              </label>
              <input className=" ml-4 outline-none mt-2 text-2xl w-64"></input>
            </div>
            <div className=" flex items-center border-b border-black mt-3 ml-2 pb-2">
              <label className=" text-lg w-40 font-monlam">
                དཔར་སྐྲུན་བྱེད་སྟངས།
              </label>
              <input className=" ml-4 outline-none mt-2 text-2xl w-48"></input>
            </div>
          </div>
          <div className="flex w-3/4">
            <div className=" flex items-center border-b border-black mt-3 pb-2 w-72">
              <label className=" text-lg w-32 font-monlam">
                རྩོམ་སྒྲིག་པ་མིང་།
              </label>
              <input className=" ml-4 outline-none mt-2 text-2xl w-28"></input>
            </div>
            <div className=" flex items-center border-b border-black mt-3 ml-2 pb-2 w-72">
              <label className=" text-lg w-20 font-monlam">དཔར་ཁང་།</label>
              <input className="ml-4 outline-none mt-2 text-2xl w-28"></input>
            </div>
            <div
              className=" flex items-center border-b border-black mt-3 ml-2 pb-2 w-60 cursor-pointer"
              onClick={() => setOptionOpen((pre) => !pre)}
            >
              <div>
                <label className=" text-lg w-40 font-monlam cursor-pointer">
                  གཏེར་སྟོན་མིང་།
                </label>
                {optionOpen ? (
                  <DropDown
                    options={option}
                    setSelect={setOptionSelected}
                    setOpen={setOptionOpen}
                  />
                ) : (
                  ""
                )}
              </div>
              <p className=" ml-7 text-2xl">{optionSelected}</p>
            </div>
          </div>
          <div className="flex w-2/4">
            <div className=" flex items-center border-b border-black mt-3 pb-2 w-72">
              <label className=" text-lg w-26 font-monlam">
                རྩོམ་པ་པོ་མིང་།
              </label>
              <input className=" ml-5 outline-none mt-2 text-2xl w-32"></input>
            </div>
            <div className=" flex items-center border-b border-black mt-3 ml-2 pb-2">
              <label className=" text-lg w-24 font-monlam">ལོ་ཙཱ་བ་མིང་།</label>
              <input className="ml-2 outline-none mt-2 text-2xl w-28"></input>
            </div>
          </div>
          <button className=" fixed bottom-[100px] right-[180px] bg-slate-400 pl-7 pr-7 pt-2 pb-2 rounded-md hover:opacity-80 active:opacity-50 font-monlam">
            ཉར་ཚགས།
          </button>
        </div>
      </div>
    </div>
  );
};

export default PechaPopup;
