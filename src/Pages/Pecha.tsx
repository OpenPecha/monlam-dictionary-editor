import React from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";
import Breadcrumb from "../Components/Breadcrumb";
import { InputPecha } from "../types/type";
import Submits from "../Components/Submit";
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
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<InputPecha>();

  const onSubmit = (data: InputPecha) => {
    console.log(data);
    reset();
  };

  return (
    <div className="font-monlam p-2 text-lg sm:ml-16 ml-4">
      <img src={logo} className="w-16 rounded-md" alt="Logo" />
      <p className="text-xl font-semibold mt-2">
        སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག
      </p>
      <Breadcrumb name="དཔེ་ཆ།" />

      <form onSubmit={handleSubmit(onSubmit)} className="w-fit mt-9">
        <div className="flex items-center border-b border-black pb-2">
          <label className="flex-shrink-0 w-fit">མཚན་བྱང་།</label>
          <input
            className="ml-2 outline-none flex-grow"
            {...register("title")}
          />
        </div>

        <div className="flex mt-3 max-sm:flex-col justify-between">
          <div className="flex items-center border-b border-black pb-2">
            <label className="flex-shrink-0 w-fit">མཚན་བྱང་བསྡུས་པ།</label>
            <input
              className="ml-2 outline-none flex-grow"
              {...register("shortentitle")}
            />
          </div>
          <div className="flex items-center border-b border-black mt-3 max-sm:w-fit sm:ml-2 pb-2">
            <label>པར་སྐྲུན་ལོ།</label>
            <input
              type="number"
              className="ml-4 font-inter text-sm outline-none"
              {...register("year_of_publish")}
            />
          </div>
        </div>

        <div className="flex mt-3 max-sm:flex-col justify-between">
          <div className="flex items-center border-b border-black pb-2 w-fit">
            <label>རྩོམ་སྒྲིག་གི་རྣམ་པ།</label>
            <input className="ml-4 outline-none" {...register("collection")} />
          </div>

          <div className="mt-3 w-72 relative sm:ml-2 gap-x-2 cursor-pointer border-b border-black pb-2 flex justify-between">
            <div className="flex items-center space-x-2">
              <label className="shrink-0">དཔར་སྐྲུན་བྱེད་སྟངས།</label>
              <select
                className="w-64 outline-none"
                {...register("print_method")}
              >
                {dummysource.map((option, index) => (
                  <option className="text-sm" key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex max-sm:flex-col justify-between">
          <AutoSuggestInput
            label="རྩོམ་སྒྲིག་པ་མིང་།"
            name="editor"
            register={register}
            setValue={setValue}
            className="mt-3"
            options={DUMMY_AUTHORS}
            personType="editor"
          />
          <AutoSuggestInput
            label="གཏེར་སྟོན་མིང་།"
            name="terton"
            register={register}
            setValue={setValue}
            className="mt-3 sm:ml-2"
            options={DUMMY_TERTONS}
            personType="terton"
          />
        </div>

        <div className="flex max-sm:flex-col justify-between">
          <AutoSuggestInput
            label="རྩོམ་པ་པོ་མིང་།"
            name="author"
            register={register}
            setValue={setValue}
            className="mt-3"
            options={DUMMY_AUTHORS}
            personType="author"
          />
          <AutoSuggestInput
            label="ལོ་ཙཱ་བ་མིང་།"
            name="translator"
            register={register}
            setValue={setValue}
            className="mt-3 sm:ml-2"
            options={DUMMY_TRANSLATORS}
            personType="translator"
          />
        </div>
        {/* <AutoSuggestInput
          label="དཔར་ཁང་།"
          register={register}
          registerName="publisher"
          className="mt-3"
          options={DUMMY_PUBLISHERS}
        /> */}
        <div className="flex font-inter text-sm mt-4 items-center border-b border-black pb-2">
          <label className="flex-shrink-0 w-fit">BDRC Link</label>
          <input
            className="ml-2 outline-none flex-grow"
            {...register("bdrclink")}
          />
        </div>
        <Submits />
      </form>
    </div>
  );
};

export default Pecha;
