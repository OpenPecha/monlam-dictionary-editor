import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputPersonModal, PersonModalSchema } from "../types/type";
import { zodResolver } from "@hookform/resolvers/zod";

interface PersonModalProps {
  isOpen: boolean;
  onClose: () => void;
  personType: string;
  title: string;
}

const PersonModal: React.FC<PersonModalProps> = ({
  isOpen,
  onClose,
  personType,
  title,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<InputPersonModal>({
    resolver: zodResolver(PersonModalSchema),
    mode: "onChange",
  });

  if (!isOpen) return null;
  const onSubmit1: SubmitHandler<InputPersonModal> = async (data) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[calc(100vw_-_40rem)] mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-monlam">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            x
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit1)} className="space-y-4">
          <div className="flex items-center">
            <div className="flex items-center border-b border-black pb-2 w-96">
              <label>མིང་།</label>
              <input
                {...register("name")}
                className="ml-2 outline-none w-64"
                disabled={isSubmitting}
              />
            </div>
            {errors.name && (
              <span className="text-red-500 font-monlam text-sm ml-2">
                *{errors.name.message}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-between border-b border-black pb-2 w-64">
              <label>སྐྱེས་ལོ།</label>
              <input
                type="number"
                {...register("year_of_birth", { valueAsNumber: true })}
                className="outline-none font-inter text-sm"
                disabled={isSubmitting}
              />
            </div>
            {errors.year_of_birth && (
              <span className="text-red-500 font-monlam text-sm ml-2">
                *{errors.year_of_birth.message}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-between border-b border-black pb-2 w-64">
              <label>འདས་ལོ།</label>
              <input
                type="number"
                {...register("year_of_death", { valueAsNumber: true })}
                className="outline-none font-inter text-sm"
                disabled={isSubmitting}
              />
            </div>
            {errors.year_of_death && (
              <span className="text-red-500 font-monlam text-sm ml-2">
                *{errors.year_of_death.message}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <div className="flex items-center border-b border-black pb-2  w-96">
              <label>མི་རིགས།</label>
              <input
                {...register("nationality")}
                className="ml-2 outline-none w-64"
                disabled={isSubmitting}
              />
            </div>
            {errors.nationality && (
              <span className="text-red-500 font-monlam text-sm ml-2">
                *{errors.nationality.message}
              </span>
            )}
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 font-monlam"
            >
              དོར་བ།
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 rounded-md font-monlam ${
                !isSubmitting
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              ཉར་བ།
            </button>
          </div>
        </form>
        {errors.root && (
          <div className="bg-red-100 border w-fit right-0 absolute border-red-400 text-red-700 px-4 py-3 rounded-l-md  mt-4">
            {errors.root.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonModal;
