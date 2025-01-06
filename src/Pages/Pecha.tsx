import React, { useState } from "react";
import logo from "../assets/logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import DropDown from "../Components/Dropdown/DropDown";
import Breadcrumb from "../Components/Breadcrumb";
import Submits from "../Components/Submit";
import { InputPecha } from "../types/type";
import AutoSuggestInput from "../Components/Autosuggestion";

const dummysource = ["གདམ་ཀ་དང་པོ།", "གདམ་ཀ་གཉིས་པ།", "གདམ་ཀ་གསུམ་པ།"];
const DUMMY_PUBLISHERS = [
  "tenzin",
  "ཞོལ་པར་ཁང་།",
  "སྣར་ཐང་པར་ཁང་།",
  "པོ་ཏ་ལ།",
  "འབྲས་སྤུངས།",
];
const DUMMY_TERTONS = [
  "tenzin",
  "རྒྱལ་པོ་གླིང་པ།",
  "འཇིགས་མེད་གླིང་པ།",
  "ཀརྨ་གླིང་པ།",
  "རྡོ་རྗེ་གླིང་པ།",
];
const DUMMY_AUTHORS = [
  "tenzin",
  "ཀླུ་སྒྲུབ།",
  "ཙོང་ཁ་པ།",
  "ས་པཎ།",
  "མི་ལ་རས་པ།",
];
const DUMMY_TRANSLATORS = [
  "tenzin",
  "ཤཱཀྱ་འོད།",
  "བཻ་རོ་ཙ་ན།",
  "ཞུ་ཆེན་གྱི་ལོ་ཙཱ་བ།",
  "མར་པ་ལོ་ཙཱ།",
];

const Pecha = () => {
  const [sourceOpen, setSourceOpen] = useState<boolean>(false);
  const [sourceSelected, setSourceSelected] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputPecha>();

  const onSubmit: SubmitHandler<InputPecha> = (data) => {
    console.log(data);
    reset();
  };
  function toggleSource() {
    setSourceOpen((pre) => !pre);
  }

  return (
    <div className=" font-monlam text-lg sm:ml-16 ml-4 mt-6">
      <img src={logo} className=" w-16 rounded-md" />
      <p className=" text-xl font-semibold mt-2 ">
        སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག
      </p>
      <Breadcrumb name="དཔེ་ཆ།" />

      <form onSubmit={handleSubmit(onSubmit)} className=" w-fit mt-9 ">
        <div className="flex items-center border-b-2 border-black pb-2">
          <label className="flex-shrink-0 w-fit">མཚན་བྱང་།</label>
          <input
            className="ml-2 outline-none flex-grow"
            {...register("tsigjang")}
          />
        </div>
        <div className="flex mt-3 max-sm:flex-col justify-between">
          <div className="flex items-center border-b-2 border-black pb-2 ">
            <label className="flex-shrink-0 w-fit">མཚན་བྱང་བསྡུས་པ།</label>
            <input className="ml-2 outline-none flex-grow" {...register("tsenja")} />
          </div>
          <div className=" flex items-center border-b-2 border-black mt-3 max-sm:w-fit sm:ml-2 pb-2">
            <label>པར་སྐྲུན་ལོ།</label>
            <input
              type="date"
              className="ml-4 font-inter text-sm outline-none"
              {...register("year")}
            />
          </div>
        </div>
        <div className="flex mt-3 max-sm:flex-col justify-between">
          <div className="flex items-center border-b-2 border-black pb-2  w-fit">
            <label>རྩོམ་སྒྲིག་གི་རྣམ་པ།</label>
            <input className=" ml-4 outline-none " {...register("author")} />
          </div>

          <div>
            <div
              className=" mt-3 w-72 relative sm:ml-2 gap-x-2  cursor-pointer border-b-2 border-black pb-2 flex justify-between"
              onClick={toggleSource}
            >
              <p>དཔར་སྐྲུན་བྱེད་སྟངས།</p>
              {sourceSelected && (
                <span className=" text-sm border flex items-center justify-center rounded-full px-2 border-black">
                  {sourceSelected}
                </span>
              )}
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

        <div className="flex max-sm:flex-col justify-between">
          <AutoSuggestInput
            label="རྩོམ་སྒྲིག་པ་མིང་།"
            register={register}
            registerName="author"
            className="mt-3"
            options={DUMMY_AUTHORS}
          />
          <AutoSuggestInput
            label="གཏེར་སྟོན་མིང་།"
            register={register}
            registerName="terton"
            className="mt-3 sm:ml-2"
            options={DUMMY_TERTONS}
          />
        </div>
        <div className="flex  max-sm:flex-col justify-between">
          <AutoSuggestInput
            label="རྩོམ་པ་པོ་མིང་།"
            register={register}
            registerName="mainAuthor"
            className="mt-3"
            options={DUMMY_AUTHORS}
          />
          <AutoSuggestInput
            label="ལོ་ཙཱ་བ་མིང་།"
            register={register}
            registerName="translator"
            className="mt-3 sm:ml-2"
            options={DUMMY_TRANSLATORS}
          />
        </div>
          <AutoSuggestInput
            label="དཔར་ཁང་།"
            register={register}
            registerName="publisher"
            className="mt-3"
            options={DUMMY_PUBLISHERS}
          />
          <div className="flex font-inter text-sm mt-4 items-center border-b-2 border-black pb-2">
            <label className="flex-shrink-0 w-fit">BDRC Link</label>
            <input className="ml-2 outline-none flex-grow" {...register("bdrclink")} />
          </div>
        <Submits />
      </form>
    </div>
  );
};

export default Pecha;
