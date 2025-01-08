import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import logo from "../assets/logo.png";
import Breadcrumb from "../Components/Breadcrumb";
import { InputPecha, PechaSchema } from "../types/type";
import Submits from "../Components/Submit";
import AutoSuggestInput from "../Components/Autosuggestion";

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
    formState: { errors },
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

  const onSubmit = async (data: InputPecha) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/create`, data, {
        headers: {
          apikey: API_KEY,
          "Content-Type": "application/json",
        },
      });
      console.log("Form submitted successfully:", response.data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
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
    <div className="font-monlam p-2 text-lg sm:ml-16 ml-4">
      <img src={logo} className="w-16 rounded-md" alt="Logo" />
      <p className="text-xl font-semibold mt-2">
        སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག
      </p>
      <Breadcrumb name="དཔེ་ཆ།" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-fit mt-9">
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
              >
                <option value="">Select print method</option>
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
          />
          <AutoSuggestInput
            label="གཏེར་སྟོན་མིང་།"
            name="tertonId"
            register={register}
            setValue={setValue}
            className="mt-3"
            options={tertons.data}
            personType="terton"
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
          />
          <AutoSuggestInput
            label="ལོ་ཙཱ་བ་མིང་།"
            name="translatorId"
            register={register}
            setValue={setValue}
            className="mt-3"
            options={translators.data}
            personType="translator"
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
        />
        {renderInputField("BDRC Link", "digital_ref")}
        <div className="mt-6">
          <Submits
            disabled={
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
    </div>
  );
};

export default Pecha;
