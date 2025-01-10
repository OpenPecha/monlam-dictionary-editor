import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Breadcrumb from "../Components/Breadcrumb";
import { InputPecha, PechaSchema } from "../types/type";
import Submits from "../Components/Submit";
import AutoSuggestInput from "../Components/Autosuggestion";
import SuccessMessage from "../Components/SuccessMessage";

interface Publisher {
  id: string;
  name: string;
  location: string;
}

interface PrintMethod {
  id: string;
  name: string;
}

interface Person {
  id: string;
  name: string;
  year_of_birth: number;
  year_of_death: number;
  nationality: string;
}

interface ApiState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

const API_BASE_URL = "https://api.monlamdictionary.com/api/grand/book";
const API_KEY = import.meta.env.VITE_API_KEY;

const defaultApiState = {
  data: [],
  loading: false,
  error: null,
};

const Pecha = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const [publishers, setPublishers] =
    useState<ApiState<Publisher>>(defaultApiState);
  const [editors, setEditors] = useState<ApiState<Person>>(defaultApiState);
  const [authors, setAuthors] = useState<ApiState<Person>>(defaultApiState);
  const [tertons, setTertons] = useState<ApiState<Person>>(defaultApiState);
  const [translators, setTranslators] =
    useState<ApiState<Person>>(defaultApiState);
  const [printMethods, setPrintMethods] =
    useState<ApiState<PrintMethod>>(defaultApiState);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<InputPecha>({
    resolver: zodResolver(PechaSchema),
    defaultValues: {
      title: "",
      shortentitle: "",
      year_of_publish: undefined,
      collection: "",
      print_methodId: "",
      editorId: "",
      tertonId: "",
      authorId: "",
      translatorId: "",
      publisherId: "",
      digital_ref: "",
    },
  });

  const fetchData = async <T,>(
    endpoint: string,
    setState: React.Dispatch<React.SetStateAction<ApiState<T>>>,
  ) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const response = await axios.get(`${API_BASE_URL}/${endpoint}/list`, {
        headers: {
          apikey: API_KEY,
          accept: "application/json",
        },
      });
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
    const fetchAllData = () => {
      fetchData<Publisher>("publisher", setPublishers);
      fetchData<Person>("editor", setEditors);
      fetchData<Person>("author", setAuthors);
      fetchData<Person>("terton", setTertons);
      fetchData<Person>("translator", setTranslators);
      fetchData<PrintMethod>("print_method", setPrintMethods);
    };
    fetchAllData();
  }, []);

  const onSubmit: SubmitHandler<InputPecha> = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://api.monlamdictionary.com/api/grand/metadata/book/create",
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

  const renderInputField = (
    label: string,
    name: keyof InputPecha,
    type: string = "text",
  ) => (
    <div className="flex flex-col w-full">
      <div className="flex items-center border-b border-black pb-2">
        <label className="flex-shrink-0 w-fit">{label}</label>
        <input
          type={type}
          className={`ml-2 outline-none flex-grow ${errors[name] ? "border-red-500" : ""}`}
          {...register(name, { valueAsNumber: type === "number" })}
          disabled={isSubmitting}
        />
      </div>
      {errors[name] && (
        <span className="text-red-500 text-sm mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );

  if (
    publishers.loading ||
    editors.loading ||
    authors.loading ||
    tertons.loading ||
    translators.loading ||
    printMethods.loading
  ) {
    return (
      <div className="font-monlam p-2 text-lg sm:ml-16 ml-4">
        <p>Loading...</p>
      </div>
    );
  }

  if (
    publishers.error ||
    editors.error ||
    authors.error ||
    tertons.error ||
    translators.error ||
    printMethods.error
  ) {
    return (
      <div className="font-monlam p-2 text-lg sm:ml-16 ml-4">
        <p>
          Error:{" "}
          {publishers.error ||
            editors.error ||
            authors.error ||
            tertons.error ||
            translators.error ||
            printMethods.error}
        </p>
      </div>
    );
  }

  return (
    <div className="font-monlam p-2 text-lg sm:ml-16 ml-4 mb-9">
      <img src={logo} className="w-16 rounded-md" alt="Logo" />
      <p className="text-xl font-semibold mt-2">
        སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག
      </p>
      <Breadcrumb name="དཔེ་ཆ།" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-fit my-9">
        {renderInputField("མཚན་བྱང་།", "title")}
        <div className="flex mt-3 max-sm:flex-col justify-between gap-4">
          {renderInputField("མཚན་བྱང་བསྡུས་པ།", "shortentitle")}
          {renderInputField("པར་སྐྲུན་ལོ།", "year_of_publish", "number")}
        </div>
        <div className="flex mt-3 max-sm:flex-col justify-between gap-4">
          {renderInputField("རྩོམ་སྒྲིག་གི་རྣམ་པ།", "collection")}
          <div className="flex flex-col w-72">
            <div className="flex items-center space-x-2 border-b border-black pb-2">
              <label className="shrink-0">དཔར་སྐྲུན་བྱེད་སྟངས།</label>
              <select
                className={`w-64 outline-none ${errors.print_methodId ? "border-red-500" : ""}`}
                {...register("print_methodId")}
                disabled={isSubmitting}
              >
                {printMethods.data.map((method) => (
                  <option className="text-sm" key={method.id} value={method.id}>
                    {method.name}
                  </option>
                ))}
              </select>
            </div>
            {errors.print_methodId && (
              <span className="text-red-500 text-sm mt-1">
                {errors.print_methodId.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex max-sm:flex-col justify-between gap-4">
          <AutoSuggestInput
            label="རྩོམ་སྒྲིག་པ་མིང་།"
            name="editorId"
            register={register}
            setValue={setValue}
            className="mt-3"
            options={editors.data}
            personType="editor"
            disabled={isSubmitting}
          />
          <AutoSuggestInput
            label="གཏེར་སྟོན་མིང་།"
            name="tertonId"
            register={register}
            setValue={setValue}
            className="mt-3"
            options={tertons.data}
            personType="terton"
            disabled={isSubmitting}
          />
        </div>
        <div className="flex max-sm:flex-col justify-between gap-4">
          <AutoSuggestInput
            label="རྩོམ་པ་པོ་མིང་།"
            name="authorId"
            register={register}
            setValue={setValue}
            className="mt-3"
            options={authors.data}
            personType="author"
            disabled={isSubmitting}
          />
          <AutoSuggestInput
            label="ལོ་ཙཱ་བ་མིང་།"
            name="translatorId"
            register={register}
            setValue={setValue}
            className="mt-3"
            options={translators.data}
            personType="translator"
            disabled={isSubmitting}
          />
        </div>
        <AutoSuggestInput
          label="དཔེ་སྐྲུན་པ།"
          name="publisherId"
          register={register}
          setValue={setValue}
          className="mt-3"
          options={publishers.data}
          personType="publisher"
          disabled={isSubmitting}
        />
        {renderInputField("BDRC Link", "digital_ref")}
        <div className="mt-6">
          <Submits
            disabled={
              isSubmitting ||
              publishers.loading ||
              editors.loading ||
              authors.loading ||
              tertons.loading ||
              translators.loading ||
              printMethods.loading
            }
          />
        </div>
      </form>

      {errors.root && (
        <div className="bg-red-100 border w-fit absolute right-0 bottom-28 border-red-400 text-red-700 px-4 py-3 rounded-l-md mt-4">
          {errors.root.message}
        </div>
      )}

      {showSuccess && <SuccessMessage />}
    </div>
  );
};

export default Pecha;
