
export interface ListItem {
  id: number;
  itemName: string;
  states: "pending" | "reviewed";
}
export interface SearchbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface ItemlistProps {
  searchQuery: string;
}

export interface InputPecha {
  tsigjang: string,
  tsenja: string,
  year: string,
  author: string,
  partunMethod: string,
  terton:string
}

export interface InputParchang {
  name: string,
  chakyul: string
}

export interface InputMina {
  type: string,
  name: string,
  birthDate: string,
  deathDate: string,
  race: string,
}

export interface InputTsigsar {
  matsig: string;
  newMatsig: boolean;
  gyunchoe: boolean;
}

export interface Props {
    popup: boolean[]
    setPopup: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export interface AutoSuggestInputProps {
  label: string;
  register: any;
  registerName: string;
  className?: string;
  options?: string[];
}