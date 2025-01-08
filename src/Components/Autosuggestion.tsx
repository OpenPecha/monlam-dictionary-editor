import React, { useState, useEffect, useRef } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import PersonModal from "./PersonModal";
import { FaPlus } from "../utils/Icons";

interface Person {
  id: string;
  name: string;
  year_of_birth?: number;
  year_of_death?: number;
  nationality?: string;
}

interface AutoSuggestInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  className?: string;
  options?: Person[];
  personType: "editor" | "terton" | "translator" | "author" | "publisher";
}

interface DetailsPopupProps {
  person: Person;
}

const DetailsPopup: React.FC<DetailsPopupProps> = ({ person }) => (
  <div className="absolute z-20 bg-white border border-black shadow-lg rounded-md p-4 w-64 -translate-x-full">
    <div className="space-y-3 text-sm">
      <div className="flex items-center justify-between w-full">
        <p className="text-secondary-600">སྐྱེས་ལོ།</p>
        <span className="font-inter px-4 py-1 text-secondary-400 bg-secondary-50 rounded-lg">
          {person.year_of_birth ?? "null"}
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-secondary-600">འདས་ལོ།</p>
        <span className="font-inter px-4 py-1 text-secondary-400 bg-secondary-50 rounded-lg">
          {person.year_of_death ?? "null"}
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-secondary-600">མི་རིགས།</p>
        <span className="font-inter px-4 py-1 text-secondary-400 bg-secondary-50 rounded-lg">
          {person.nationality ?? "null"}
        </span>
      </div>
    </div>
  </div>
);

const typeLabels = {
  editor: "རྩོམ་སྒྲིག་པ་",
  terton: "གཏེར་སྟོན་",
  translator: "ལོ་ཙཱ་བ་",
  author: "རྩོམ་པ་པོ་",
  publisher: "དཔེ་སྐྲུན་པ།",
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
  const [suggestions, setSuggestions] = useState<Person[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [showDetails, setShowDetails] = useState(false);
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
    if (value.trim()) {
      const filtered = options.filter((option) =>
        option.name.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setSelectedPerson(null);
  };

  const handleSuggestionClick = (suggestion: Person) => {
    setValue(name, suggestion.name); // Set the name in the input field
    register(name).onChange({ target: { value: suggestion.name } }); // Update the form
    setSelectedPerson(suggestion);
    setShowSuggestions(false); // Close the suggestions list
  };

  return (
    <>
      <div className={`relative ${className}`}>
        <div className="flex items-center border-b border-black pb-2 w-fit">
          <label>{label}</label>
          <div className="relative flex items-center ml-4">
            <input
              {...register(name)}
              onChange={handleInputChange}
              className="outline-none"
              autoComplete="off"
            />
            {selectedPerson && (
              <div
                className="relative ml-2"
                onMouseEnter={() => setShowDetails(true)}
                onMouseLeave={() => setShowDetails(false)}
              >
                <div className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer flex items-center justify-center text-white">
                  <span>:</span>
                </div>
                {showDetails && <DetailsPopup person={selectedPerson} />}
              </div>
            )}
          </div>
        </div>
        {showSuggestions && (
          <div
            ref={suggestionsRef}
            className="absolute z-10 mt-1 font-monlam text-sm w-64 bg-white border border-black shadow-lg flex flex-col"
          >
            <div className="max-h-28 overflow-y-auto">
              {suggestions.length > 0 ? (
                suggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="p-2 border-b border-black hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name}
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
