import React, { useState, useEffect, useRef } from "react";
import { FaPlus } from "../utils/Icons";
import { AutoSuggestInputProps } from "../types/type";

const AutoSuggestInput: React.FC<AutoSuggestInputProps> = ({
  label,
  register,
  registerName,
  className = "",
  options = [],
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

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

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center border-b border-black pb-2 w-fit">
        <label>{label}</label>
        <input
          {...register(registerName)}
          value={inputValue}
          onChange={handleInputChange}
          className="ml-4 outline-none"
          autoComplete="off"
        />
      </div>

      {showSuggestions && inputValue.trim() && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 mt-1 font-monlam text-sm w-64 bg-white border border-black shadow flex flex-col"
        >
          <div className="max-h-28 overflow-y-auto">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className=" p-2 border-b border-black hover:bg-gray-100 cursor-pointer"
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
          <div className="flex items-center border-t border-black justify-between p-2 bg-white">
            <p>སྣོན་པ། </p>
            <FaPlus className="cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoSuggestInput;
