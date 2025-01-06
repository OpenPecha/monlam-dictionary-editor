import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import logo from "../assets/logo.png";
import DropDown from "../Components/Dropdown/DropDown";
import Breadcrumb from "../Components/Breadcrumb";
import Submits from "../Components/Submit";
import SuccessMessage from "../Components/SuccessMessage";
import { InputMina } from "../types/type";

const dummysource = ["གདམ་ཀ་དང་པོ།", "གདམ་ཀ་གཉིས་པ།", "གདམ་ཀ་གསུམ་པ།"];

const Mina: React.FC = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [typeOpen, setTypeOpen] = useState<boolean>(false);
  const [typeSelected, setTypeSelected] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputMina>();

  useEffect(() => {
    let navigationTimer: any;

    if (showSuccess) {
      navigationTimer = setTimeout(() => {
        navigate("/");
      }, 3000);
    }

    return () => {
      if (navigationTimer) {
        clearTimeout(navigationTimer);
      }
    };
  }, [showSuccess, navigate]);

  const onSubmit: SubmitHandler<InputMina> = async (data) => {
    try {
      const formData = {
        ...data,
        type: typeSelected,
      };

      console.log(formData);
      reset();
      setShowSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setShowSuccess(false);
    }
  };

  return (
    <div className="font-monlam sm:px-16 p-4">
      <img src={logo} alt="Logo" className="w-16 rounded-md" />
      <p className="text-xl font-semibold mt-2">
        སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག
      </p>

      <Breadcrumb name="མི་སྣ།" />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-9 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center">
            <div
              className="flex items-center border-b-2 border-black pb-2 w-1/4 cursor-pointer"
              onClick={() => setTypeOpen((prev) => !prev)}
            >
              <label>རིགས།</label>
              <p className="ml-8">{typeSelected}</p>
            </div>
            <div>
              {!typeSelected && (
                <span className="text-red-500 font-inter text-sm">
                  *Type selection is required
                </span>
              )}
            </div>
          </div>

          {typeOpen && (
            <DropDown
              options={dummysource}
              setSelect={setTypeSelected}
              setOpen={setTypeOpen}
            />
          )}
        </div>

        <div className="flex items-center">
          <div className="flex items-center border-b-2 border-black pb-2 w-fit">
            <label htmlFor="name">མིང་།</label>
            <input
              id="name"
              className="ml-2 outline-none w-64"
              {...register("name", {
                required: "Name is required",
              })}
            />
          </div>
          {errors.name && (
            <span className="text-red-500 font-inter text-sm ml-2">
              *{errors.name.message}
            </span>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-between border-b-2 border-black pb-2 w-64">
            <label htmlFor="birthDate">སྐྱེས་ལོ།</label>
            <input
              id="birthDate"
              type="date"
              className="outline-none font-inter text-sm"
              {...register("birthDate", {
                required: "Birth date is required",
              })}
            />
          </div>
          {errors.birthDate && (
            <span className="text-red-500 font-inter text-sm ml-2">
              *{errors.birthDate.message}
            </span>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-between border-b-2 border-black pb-2 w-64">
            <label htmlFor="deathDate">འདས་ལོ།</label>
            <input
              id="deathDate"
              type="date"
              className="outline-none font-inter text-sm"
              {...register("deathDate", {
                required: "Death date is required",
              })}
            />
          </div>
          {errors.deathDate && (
            <span className="text-red-500 font-inter text-sm ml-2">
              *{errors.deathDate.message}
            </span>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex items-center border-b-2 border-black pb-2 w-fit">
            <label htmlFor="race">མི་རིགས།</label>
            <input
              id="race"
              className="ml-2 outline-none w-64"
              {...register("race", {
                required: "Race is required",
              })}
            />
          </div>
          {errors.race && (
            <span className="text-red-500 font-inter text-sm ml-2">
              *{errors.race.message}
            </span>
          )}
        </div>

        <Submits />
      </form>

      {showSuccess && <SuccessMessage />}
    </div>
  );
};

export default Mina;
