import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import AutoSuggestInput from "../Autosuggestion";

const DUMMY_AUTHORS = [
  "tenzin",
  "ཀླུ་སྒྲུབ།",
  "ཙོང་ཁ་པ།",
  "ས་པཎ།",
  "མི་ལ་རས་པ།",
];

interface DelsheyProps {
  onClose: () => void;
}

interface SubFormData {
  content: string;
  mainbook: string;
  field0: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  dropdownpop: string;
  location1: string;
  location2: string;
  location3: string;
  location4: string;
}

interface FormData {
  explanation: string;
  example: string;
  dropdown1: string;
  dropdown2: string;
  dropdown3: string;
  toggle: boolean;
  subForms: SubFormData[];
}

const Delshey = ({ onClose }: DelsheyProps) => {
  const { register, control } = useForm<FormData>({
    defaultValues: {
      subForms: [],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "subForms",
  });

  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const addNewTab = () => {
    append({
      content: "",
      mainbook: "",
      field0: "",
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
      dropdownpop: "",
      location1: "",
      location2: "",
      location3: "",
      location4: "",
    });
    setActiveTab(fields.length);
  };
  return (
    <div
      className="font-monlam fixed z-40 inset-0 bg-black/50 flex items-start justify-center overflow-hidden"
      onClick={handleBackdropClick}
    >
      <div className="bg-white relative w-full max-w-4xl mx-4 my-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center border-b border-gray-200 py-4 z-40 sticky top-0 bg-white">
            <h2 className="text-xl font-monlam">འགྲེལ་བཤད།</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <RxCross2 />
            </button>
          </div>

          <form className="mt-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="w-24">འགྲེལ་བ།</label>
                <input
                  className="flex-1 border-b border-black outline-none"
                  {...register("explanation")}
                />
              </div>
              <div className="flex items-center">
                <label className="w-24">དཔེར་བརྗོད་ཚིག་གྲུབ།</label>
                <input
                  className="flex-1 border-b border-black outline-none"
                  {...register("example")}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 flex items-center space-x-2">
                <label className="shrink-0">བརྡ་སྤྲོད་དབྱེ་བའི་སྡེ་ཚན།</label>
                <select
                  className="w-full border-b border-black outline-none pb-2"
                  {...register("dropdown1")}
                >
                  <option value="">སྡེ་ཚན།</option>
                </select>
              </div>
              <div className="flex-1 flex items-center space-x-2">
                <label className="shrink-0">སྤྱོད་སྒོ།</label>
                <select
                  className="w-full border-b border-black outline-none pb-2"
                  {...register("dropdown2")}
                >
                  <option value="">སྤྱོད་སྒོ།</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <select
                  className="w-full border-b border-black outline-none pb-2"
                  {...register("dropdown3")}
                >
                  <option value="">བརྡ་ཆད་དབྱེ་བའི་སྡེ་ཚན།</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">པར་རིས་དགོས།</span>
                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    {...register("toggle")}
                  />
                  <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors duration-300 ease-in-out peer-checked:bg-blue-500" />
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-6" />
                </label>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold">མཆན།</p>
                {fields.map((field, index) => (
                  <button
                    key={field.id}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`border rounded-lg px-4 py-1 ${activeTab === index ? "bg-gray-200" : ""}`}
                  >
                    མཆན། {index + 1}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={addNewTab}
                  className="border rounded-lg px-4 py-1 flex items-center"
                >
                  <span className="text-lg">+</span>
                </button>
              </div>

              {activeTab !== null && (
                <div className="mt-4">
                  <div>
                    <input
                      placeholder="ལུང་།"
                      className="w-full border-b border-black outline-none pb-2"
                      {...register(`subForms.${activeTab}.content`)}
                    />
                    <AutoSuggestInput
                      label="མཚན་བྱང་།"
                      register={register}
                      registerName={`subForms.${activeTab}.mainbook`}
                      className="mt-3"
                      options={DUMMY_AUTHORS}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">མཚན་བྱང་བསྡུས་པ།</label>
                      <input
                        className="w-full border-b border-black outline-none"
                        {...register(`subForms.${activeTab}.field0`)}
                      />
                    </div>
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">རྩོམ་སྒྲིག་གི་རྣམ་པ།</label>
                      <input
                        className="w-full border-b border-black outline-none"
                        {...register(`subForms.${activeTab}.field1`)}
                      />
                    </div>
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">རྩོམ་སྒྲིག་པ་མིང་།</label>
                      <input
                        className="w-full border-b border-black outline-none"
                        {...register(`subForms.${activeTab}.field2`)}
                      />
                    </div>
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">རྩོམ་པ་པོ་མིང་།</label>
                      <input
                        className="w-full border-b border-black outline-none"
                        {...register(`subForms.${activeTab}.field3`)}
                      />
                    </div>
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">ལོ་ཙཱ་བ་མིང་།</label>
                      <input
                        className="w-full border-b border-black outline-none"
                        {...register(`subForms.${activeTab}.field4`)}
                      />
                    </div>
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">གཏེར་སྟོན་མིང་།</label>
                      <input
                        className="w-full border-b border-black outline-none"
                        {...register(`subForms.${activeTab}.field5`)}
                      />
                    </div>
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">དཔར་ཁང་།</label>
                      <input
                        className="w-full border-b border-black outline-none"
                        {...register(`subForms.${activeTab}.field6`)}
                      />
                    </div>
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">པར་སྐྲུན་ལོ།</label>
                      <input
                        type="date"
                        className="w-full font-inter text-sm pb-2 border-b border-black outline-none"
                        {...register(`subForms.${activeTab}.field7`)}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="shrink-0">དཔར་སྐྲུན་བྱེད་སྟངས།</label>
                      <select
                        className="w-full border-b border-black outline-none"
                        {...register(`subForms.${activeTab}.dropdownpop`)}
                      >
                        <option value="">སྤྱོད་སྒོ།</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex font-inter text-sm space-x-2 items-center mt-4">
                    <label className="shrink-0">BDRC LINK</label>
                    <input
                      className="w-full border-b border-black outline-none"
                      {...register(`subForms.${activeTab}.field8`)}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-xl font-bold mb-2">
                      ཆགས་ས།
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="flex space-x-2 items-center">
                        <label className="shrink-0">པོད་ཕྲེང་།</label>
                        <input
                          className="w-full border-b border-black outline-none"
                          {...register(`subForms.${activeTab}.location1`)}
                        />
                      </div>
                      <div className="flex space-x-2 items-center">
                        <label className="shrink-0">ཤོག་གྲངས།</label>
                        <input
                          className="w-full border-b border-black outline-none"
                          {...register(`subForms.${activeTab}.location2`)}
                        />
                      </div>
                      <div className="flex space-x-2 items-center">
                        <label className="shrink-0">ཐིག་ཕྲེང་།</label>
                        <input
                          className="w-full border-b border-black outline-none"
                          {...register(`subForms.${activeTab}.location4`)}
                        />
                      </div>
                      <select
                        className="border-b border-black outline-none pb-2"
                        {...register(`subForms.${activeTab}.location3`)}
                      >
                        <option value="">ཤོག་ལྡེབ།</option>
                        <option value="ས">ས་</option>
                        <option value="ན">ན་</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                ཉར་ཚགས།
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Delshey;
