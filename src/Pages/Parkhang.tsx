import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import Breadcrumb from "../Components/Breadcrumb";
import Submits from "../Components/Submit";
import SuccessMessage from "../Components/SuccessMessage";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputParchang, PublisherSchema } from "../types/type";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const Parkhang = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputParchang>({
    resolver: zodResolver(PublisherSchema),
  });

  const onSubmit: SubmitHandler<InputParchang> = async (data) => {
    setError("");
    try {
      const response = await axios.post(
        "https://api.monlamdictionary.com/api/grand/book/publisher/create",
        data,
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
        const errorMessage =
          error.response?.data?.detail || "Form submission failed";
        setError(errorMessage);
        console.error("API Error:", {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
        });
      } else {
        setError("An unexpected error occurred");
        console.error("Form submission error:", error);
      }
      setShowSuccess(false);
    }
  };

  return (
    <div className="font-monlam sm:px-12 p-4">
      <img src={logo} alt="Logo" className="w-16 rounded-md" />
      <p className="text-xl font-semibold mt-2">
        སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག
      </p>

      <Breadcrumb name="དཔར་ཁང་།" />

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-9 space-y-4">
        <div className="flex items-center">
          <div className="flex items-center border-b border-black pb-2 w-fit">
            <label htmlFor="name">མིང་།</label>
            <input
              id="name"
              className="ml-2 outline-none text-lg w-64"
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
          <div className="flex items-center border-b border-black pb-2 w-fit">
            <label htmlFor="location">ཆགས་ཡུལ།</label>
            <input
              id="location"
              className="ml-4 outline-none text-lg"
              {...register("location")}
              disabled={isSubmitting}
            />
          </div>
          {errors.location && (
            <span className="text-red-500 font-monlam text-sm ml-2">
              *{errors.location.message}
            </span>
          )}
        </div>
        <Submits disabled={isSubmitting} />
      </form>

      {showSuccess && <SuccessMessage />}
    </div>
  );
};

export default Parkhang;
