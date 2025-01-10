import React from "react";
import logo from "../assets/logo.png";
import StatusPending from "../Components/StatusPending";
import StatusReviewed from "../Components/StatusReviewed";
import Toggle from "../Components/Toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Delshey from "../Components/Delshey/Delshey";
import Breadcrumb from "../Components/Breadcrumb";
import Submits from "../Components/Submit";
import { InputWord, WordSchema } from "../types/type";
import { FaPlus } from "../utils/Icons";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

const Tsigsar = () => {
  const [isDelsheyOpen, setIsDelsheyOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputWord>({
    resolver: zodResolver(WordSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<InputWord> = (data) => {
    console.log(data);
    reset();
  };

  interface ApiState<T> {
    data: T[];
    loading: boolean;
    error: string | null;
  }

  const defaultApiState = {
    data: [],
    loading: false,
    error: null,
  };

  interface Orgintype {
    id: string;
    language: string;
  }

  const API_KEY = import.meta.env.VITE_API_KEY;
  const [orgin, setorigin] = useState<ApiState<Orgintype>>(defaultApiState);

  const fetchData = async <T,>(
    setState: React.Dispatch<React.SetStateAction<ApiState<T>>>,
  ) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const response = await axios.get(
        "https://api.monlamdictionary.com/api/grand/metadata/origin/list",
        {
          headers: {
            apikey: API_KEY,
            accept: "application/json",
          },
        },
      );
      setState({ data: response.data, loading: false, error: null });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: error.response?.data?.detail || "Failed to fetch data",
        }));
      }
    }
  };

  useEffect(() => {
    fetchData<Orgintype>(setorigin);
  }, []);

  return (
    <div className="text-lg font-monlam sm:ml-16 ml-2">
      <img src={logo} className="w-16 rounded-md" alt="logo" />
      <p className="text-xl font-semibold mt-2">
        སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག
      </p>
      <Breadcrumb name="ཚིག་གསར།" />
      <div className="mt-6">
        <StatusPending />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-fit">
        <div className="flex w-full items-center border-b border-black mt-4 pb-2">
          <label className="flex-shrink-0 w-fit">མ་ཚིག</label>
          <input
            className="ml-2 outline-none flex-grow"
            {...register("lemma")}
          />
        </div>
        {errors.lemma && (
          <p className="text-red-500 text-sm">{errors.lemma.message}</p>
        )}
        <div className="flex max-sm:flex-col mt-4">
          <div className="flex mr-16">
            <div className="flex items-center">
              <p>མ་ཚིག་གསར་པ།</p>
              <div className="mb-2">
                <Toggle register={register} value="is_mordern" />
              </div>
            </div>

            <div className="flex items-center">
              <p className="ml-12">རྒྱུན་སྤྱོད།</p>
              <div className="mb-2">
                <Toggle register={register} value="is_frequent" />
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center mt-1 space-x-2">
            <label className="shrink-0">འབྱུང་ཁུངས།</label>
            <select
              className="w-fit border-b border-black outline-none"
              {...register("originId")}
            >
              {orgin.data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.language}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Submits />
      </form>

      <button
        className="flex text-sm p-2 justify-center items-center mt-8 w-fit rounded-md bg-surface-light border space-x-2 transition-all duration-150 hover:opacity-80"
        onClick={() => setIsDelsheyOpen(true)}
        type="button"
      >
        <p>འགྲེལ་བཤད།</p>
        <FaPlus className="w-4" />
      </button>
      {isDelsheyOpen && (
        <Delshey
          isDelsheyOpen={isDelsheyOpen}
          onClose={() => setIsDelsheyOpen(false)}
        />
      )}
    </div>
  );
};

export default Tsigsar;
