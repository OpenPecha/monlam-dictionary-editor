import logo from "../assets/logo.png";
import StatusPending from "../Components/StatusPending";
import StatusReviewed from "../Components/StatusReviewed";
import Toggle from "../Components/Toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import DropDown from "../Components/Dropdown/DropDown";
import { useState } from "react";
import Delshey from "../Components/Delshey/Delshey";
import Breadcrumb from "../Components/Breadcrumb";
import Submits from "../Components/Submit";
import { InputTsigsar } from "../types/type";
import {FaPlus} from "../utils/Icons";

const dummysource = ["གདམ་ཀ་དང་པོ།", "གདམ་ཀ་གཉིས་པ།", "གདམ་ཀ་གསུམ་པ།"];
const Tsigsar = () => {
  const [sourceOpen, setSourceOpen] = useState<boolean>(false);
  const [sourceSelected, setSourceSelected] = useState<string>("");
  const [popup, setPopup] = useState<boolean[]>([false, false, false]);

  function toggleSource() {
    setSourceOpen((pre) => !pre);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputTsigsar>();

  const onSubmit: SubmitHandler<InputTsigsar> = (data) => {
    console.log(data);
    reset();
  }

  return (
    <>
      <div className=" text-lg font-monlam ml-16 mt-16">
        <img src={logo} className=" w-16 rounded-md"/>
        <p className=" text-xl font-semibold mt-2 ">
          སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག
        </p>
        <Breadcrumb name="ཚིག་གསར།" />
        <div className=" mt-6">
          <StatusPending />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex items-center border-b-2 border-black mt-4 pb-2 w-fit">
            <label>མ་ཚིག</label>
            <input
              className=" ml-4 outline-none mt-2 "
              {...register("matsig")}
            ></input>
          </div>

          <div className=" flex mt-4">
            <div className=" flex items-center">
              <p>མ་ཚིག་གསར་པ།</p>
              <div className="mb-2">
                <Toggle register={register} value="newMatsig" />
              </div>
            </div>

            <div className=" flex items-center">
              <p className=" ml-12 ">རྒྱུན་སྤྱོད།</p>
              <div className=" mb-2">
                <Toggle register={register} value="gyunchoe" />
              </div>
            </div>
            <div>
              <div
                className=" mt-2 relative ml-12 gap-x-2  cursor-pointer border-b-2 border-black pb-2 w-fit flex justify-between"
                onClick={toggleSource}
              >
                <p>འབྱུང་ཁུངས།</p>
                { sourceSelected &&<span className=" text-sm border flex items-center justify-center rounded-full px-2 border-black">{sourceSelected}</span>}
              </div>
              <div className=" ml-11">
                {sourceOpen ? (
                  <DropDown
                    options={dummysource}
                    setSelect={setSourceSelected}
                    setOpen={setSourceOpen}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {popup[0] ? <Delshey popup={popup} setPopup={setPopup} /> : ""}
          <button
            className=" flex text-sm p-2 justify-center items-center mt-8 w-fit rounded-md bg-surface-light border space-x-2  transition-all duration-150 hover:opacity-80"
            onClick={() => setPopup(() => [true, false, false])}
          >
            <p>འགྲེལ་བཤད།</p> <FaPlus className="w-4"/>
          </button>

         <Submits/>
        </form>
      </div>
    </>
  );
};

export default Tsigsar;
