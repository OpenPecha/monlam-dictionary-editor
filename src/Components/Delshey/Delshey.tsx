import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { InputSense, SenseSchema } from "../../types/type";
import { zodResolver } from "@hookform/resolvers/zod";

interface DelsheyProps {
  isDelsheyOpen: boolean;
  onClose: () => void;
}

const Delshey: React.FC<DelsheyProps> = ({ isDelsheyOpen, onClose }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<InputSense>({
    resolver: zodResolver(SenseSchema),
  });

  const { fields } = useFieldArray({
    control,
    name: "citationIds",
  });

  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isDelsheyOpen) return null;

  const modalContent = (
    <div
      className="fixed z-40 inset-0 bg-black/50 flex items-start justify-center overflow-hidden font-monlam"
      onClick={handleBackdropClick}
    >
      <div className="bg-white relative w-full max-w-4xl mx-4 my-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center border-b border-gray-200 py-4 z-40 sticky top-0 bg-white">
            <h2 className="text-xl">འགྲེལ་བཤད།</h2>
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
                  {...register("description")}
                />
              </div>
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
              <div className="flex items-center">
                <label className="w-24">དཔེར་བརྗོད་ཚིག་གྲུབ།</label>
                <input
                  className="flex-1 border-b border-black outline-none"
                  {...register("example_sentence")}
                />
              </div>
              {errors.example_sentence && (
                <p className="text-red-500 text-sm">
                  {errors.example_sentence.message}
                </p>
              )}
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 flex items-center space-x-2">
                <label className="shrink-0">བརྡ་སྤྲོད་དབྱེ་བའི་སྡེ་ཚན།</label>
                <select
                  className="w-full border-b border-black outline-none pb-2"
                  {...register("name_entityId")}
                >
                  <option value="">སྡེ་ཚན།</option>
                </select>
              </div>
              <div className="flex-1 flex items-center space-x-2">
                <label className="shrink-0">སྤྱོད་སྒོ།</label>
                <select
                  className="w-full border-b border-black outline-none pb-2"
                  {...register("posId")}
                >
                  <option value="">སྤྱོད་སྒོ།</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <select
                  className="w-full border-b border-black outline-none pb-2"
                  {...register("registerId")}
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
                    {...register("has_illustration")}
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
                      {...register(`citationIds`)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">མཚན་བྱང་བསྡུས་པ།</label>
                      <input
                        className="w-full border-b border-black outline-none"
                        {...register(`citationIds`)}
                      />
                    </div>
                    <div className="flex space-x-2 items-center">
                      <label className="shrink-0">རྩོམ་སྒྲིག་གི་རྣམ་པ།</label>
                      <input
                        className="w-full border-b border-black outline-none"
                        {...register(`citationIds`)}
                      />
                    </div>
                    {/* Rest of the fields remain the same, just update the register path from subForms to citationIds */}
                    {/* ... */}
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
                          {...register(`citationIds`)}
                        />
                      </div>
                      <div className="flex space-x-2 items-center">
                        <label className="shrink-0">ཤོག་གྲངས།</label>
                        <input
                          className="w-full border-b border-black outline-none"
                          {...register(`citationIds`)}
                        />
                      </div>
                      <div className="flex space-x-2 items-center">
                        <label className="shrink-0">ཐིག་ཕྲེང་།</label>
                        <input
                          className="w-full border-b border-black outline-none"
                          {...register(`citationIds`)}
                        />
                      </div>
                      <select
                        className="border-b border-black outline-none pb-2"
                        {...register(`citationIds`)}
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

  return createPortal(modalContent, document.body);
};

export default Delshey;
