import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import Breadcrumb from "../Components/Breadcrumb";
import Submits from "../Components/Submit";
import { InputParchang } from "../types/type";
import SuccessMessage from "../Components/SuccessMessage";
import { useNavigate } from "react-router-dom";

const Parkhang = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputParchang>();

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

  const onSubmit: SubmitHandler<InputParchang> = async (data) => {
    try {
      console.log(data);
      reset();
      setShowSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setShowSuccess(false);
    }
  };

  return (
    <div className="font-monlam sm:px-12 p-4 ">
      <img src={logo} alt="Logo" className="w-16 rounded-md" />
      <p className="text-xl font-semibold mt-2">
        སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག
      </p>

      <Breadcrumb name="དཔར་ཁང་།" />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-9 space-y-4">
        <div className=" flex items-center ">
          <div className="flex items-center border-b-2 border-black pb-2 w-fit">
            <label htmlFor="name">མིང་།</label>
            <input
              id="name"
              className=" ml-2 outline-none text-lg w-64"
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
          <div className="flex items-center border-b-2 border-black pb-2 w-fit">
            <label htmlFor="chakyul">ཆགས་ཡུལ།</label>
            <input
              id="chakyul"
              className="ml-4 outline-none text-lg"
              {...register("chakyul", {
                required: "Chakyul is required",
              })}
            />
          </div>
          {errors.chakyul && (
            <span className="text-red-500 font-inter text-sm ml-2">
              *{errors.chakyul.message}
            </span>
          )}
        </div>
        <Submits />
      </form>
      {showSuccess && <SuccessMessage />}
    </div>
  );
};

export default Parkhang;
