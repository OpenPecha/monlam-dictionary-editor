import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import logo from "../assets/logo.png";
import Breadcrumb from "../Components/Breadcrumb";
import Submits from "../Components/Submit";
import SuccessMessage from "../Components/SuccessMessage";
import { InputMina, MinaSchema } from "../types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const typeofMinaOptions = [
  "རྩོམ་སྒྲིག་པ་",
  "གཏེར་སྟོན་",
  "ལོ་ཙཱ་བ་",
  "རྩོམ་པ་པོ་",
];
const Mina: React.FC = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<InputMina>({
    resolver: zodResolver(MinaSchema),
    mode: "onChange",
  });

  const API_KEY = import.meta.env.VITE_API_KEY;

  const onSubmit: SubmitHandler<InputMina> = async (data) => {
    const { type, ...dataToSend } = data;
    const typeMap: { [key: string]: string } = {
      "རྩོམ་སྒྲིག་པ་": "editor",
      "གཏེར་སྟོན་": "terton",
      "ལོ་ཙཱ་བ་": "translator",
      "རྩོམ་པ་པོ་": "author",
    };

    const pathnav = typeMap[type];
    if (!pathnav) {
      setError("type", { type: "manual", message: "Invalid type selected" });
      return;
    }
    console.log(data);

    try {
      const response = await axios.post(
        `https://api.monlamdictionary.com/api/grand/book/${pathnav}/create`,
        dataToSend,
        {
          headers: {
            apikey: API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      if (response.data) {
        console.log("Success:", response.data);
        reset();
        setShowSuccess(true);
        const timer = setTimeout(() => {
          setShowSuccess(false);
          navigate("/");
        }, 3000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("root", {
          type: "custom",
          message: error.response?.data?.detail || "Form submission failed",
        });

        console.error("API Error:", {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
        });
      } else {
        setError("root", {
          type: "custom",
          message: "An unexpected error occurred",
        });
        console.error("Form submission error:", error);
      }
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

      <form onSubmit={handleSubmit(onSubmit)} className="mt-9 space-y-4 w-fit">
        <div className=" flex items-center space-x-2">
          <label className="shrink-0">རིགས།</label>
          <select
            className=" w-64 border-b border-black outline-none "
            {...register("type")}
          >
            {typeofMinaOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <div className="flex items-center border-b border-black pb-2 w-full">
            <label>མིང་།</label>
            <input
              id="name"
              className="ml-2 outline-none w-64"
              {...register("name")}
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
              id="birthyear"
              type="number"
              className="outline-none font-inter text-sm"
              {...register("year_of_birth", {
                valueAsNumber: true,
                required: true,
              })}
              disabled={isSubmitting}
            />
          </div>
          {errors.year_of_birth && (
            <span className="text-red-500 font-inter text-sm ml-2">
              *{errors.year_of_birth.message}
            </span>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-between border-b border-black pb-2 w-64">
            <label htmlFor="deathDate">འདས་ལོ།</label>
            <input
              id="deathDate"
              type="number"
              className="outline-none font-inter text-sm"
              {...register("year_of_death", { valueAsNumber: true })}
              disabled={isSubmitting}
            />
          </div>
          {errors.year_of_death && (
            <span className="text-red-500 font-inter text-sm ml-2">
              *{errors.year_of_death.message}
            </span>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex items-center border-b border-black pb-2 w-full">
            <label htmlFor="race">མི་རིགས།</label>
            <input
              id="race"
              className="ml-2 outline-none w-64"
              {...register("nationality")}
              disabled={isSubmitting}
            />
          </div>
          {errors.nationality && (
            <span className="text-red-500 font-monlam text-sm ml-2">
              *{errors.nationality.message}
            </span>
          )}
        </div>

        <Submits disabled={isSubmitting} />
      </form>
      {errors.root && (
        <div className="bg-red-100 border w-fit right-0 absolute border-red-400 text-red-700 px-4 py-3 rounded-l-md  mt-4">
          {errors.root.message}
        </div>
      )}
      {showSuccess && <SuccessMessage />}
    </div>
  );
};

export default Mina;
