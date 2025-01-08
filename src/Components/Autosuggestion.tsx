import React, { useState, useEffect, useRef } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import PersonModal from "./PersonModal";
import { FaPlus } from "../utils/Icons";

interface AutoSuggestInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  className?: string;
  options?: string[];
  personType: "editor" | "terton" | "translator" | "author";
}

const typeLabels = {
  editor: "རྩོམ་སྒྲིག་པ་",
  terton: "གཏེར་སྟོན་",
  translator: "ལོ་ཙཱ་བ་",
  author: "རྩོམ་པ་པོ་",
};

const AutoSuggestInput: React.FC<AutoSuggestInputProps> = ({
  label,
  name,
  register,
  setValue,
  className = "",
  options = [],
  personType,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  //for outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(name, value);

    if (value.trim()) {
      const filtered = options.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  //for suggestion click set input as per suggestion text
  const handleSuggestionClick = (suggestion: string) => {
    setValue(name, suggestion);
    setShowSuggestions(false);
  };

  return (
    <>
      <div className={`relative ${className}`}>
        <div className="flex items-center border-b border-black pb-2 w-fit">
          <label>{label}</label>
          <input
            {...register(name)}
            onChange={handleInputChange}
            className="ml-4 outline-none"
            autoComplete="off"
          />
        </div>

        {showSuggestions && (
          <div
            ref={suggestionsRef}
            className="absolute z-10 mt-1 font-monlam text-sm w-64 bg-white border border-black shadow-lg flex flex-col"
          >
            <div className="max-h-28 overflow-y-auto">
              {suggestions.length > 0 ? (
                suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-2 border-b border-black hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-center text-gray-500 font-inter text-sm">
                  No matching data found
                </div>
              )}
            </div>
            <div
              className="flex items-center border-t border-black justify-between p-2 bg-white cursor-pointer hover:bg-gray-100"
              onClick={() => setIsModalOpen(true)}
            >
              <p>སྣོན་པ། </p>
              <FaPlus />
            </div>
          </div>
        )}
      </div>

      <PersonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        personType={personType}
        title={typeLabels[personType]}
      />
    </>
  );
};

export default AutoSuggestInput;
