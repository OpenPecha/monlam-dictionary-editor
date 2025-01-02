import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import sidebarimage from '../../public/images/sidebarimage.png'
import { FaPlus } from "react-icons/fa6";
import Searchbar from "./Searchbar";
import AddItem from "./AddItem";
import Itemlist from "./Itemlist";

const Sidebar = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex bg-gradient-to-b text-secondary-100 from-[#052250] to-[#0B4DB6] w-fit font-monlam rounded-r-md">
      <div className="h-screen w-14 border-r border-[#5290F4]">
        <div className="h-14 w-full items-center justify-center flex">
          {!show && (
            <RiArrowRightSLine
              className="h-5 w-5 transition-transform duration-300 cursor-pointer"
              onClick={() => setShow(prev => !prev)}
            />
          )}
        </div>
        <div className="border-t flex flex-col h-[calc(100vh-theme(space.14))] items-center justify-between p-4 border-t-[#5290F4] w-full">
          <div className="space-y-6">
            <IoIosSearch className="h-5 w-5" />
            <IoHomeOutline className="h-5 w-5" />
            <FaPlus className="h-5 w-5" />
          </div>
          <div>
            <p className="font-monlam text-xs [writing-mode:vertical-rl] rotate-180">
              སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ།
            </p>
          </div>
        </div>
      </div>

      <div 
        className={`flex-1 rounded-r-md flex flex-col h-screen transition-all duration-300 ${
          show ? 'w-[300px]' : 'w-0'
        }`}
      >
        <div 
          className={`transition-opacity duration-200 ${
            show ? 'opacity-100' : 'opacity-0'
          } ${!show ? 'invisible' : ''}`}
        >
          <div className="flex justify-between items-center border-[#5290F4] border-b p-2 h-14">
            <p className="font-monlam whitespace-nowrap">སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ།</p>
            <RiArrowRightSLine
              className={`h-5 w-5 transition-transform duration-300 cursor-pointer ${
                show ? 'rotate-180' : ''
              }`}
              onClick={() => setShow(prev => !prev)}
            />
          </div>
          <div className="p-4 flex-1 overflow-auto">
            <Searchbar />
            <AddItem/>
            <Itemlist/>
          </div>
          <div className="h-[100px] mt-auto">
            <img src={sidebarimage} alt="logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;