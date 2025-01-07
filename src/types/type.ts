import { z } from "zod";
export const tibetanRegex = /^[\u0F00-\u0FFF\u0F00-\u0FFF\s]+$/;
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
  tsigjang: string;
  tsenja: string;
  year: string;
  author: string;
  partunMethod: string;
  terton: string;
  bdrclink: string;
}

export interface InputTsigsar {
  matsig: string;
  newMatsig: boolean;
  gyunchoe: boolean;
}

export interface Props {
  popup: boolean[];
  setPopup: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export interface AutoSuggestInputProps {
  label: string;
  register: any;
  registerName: string;
  className?: string;
  options?: string[];
}

export interface SubmitsProps {
  disabled?: boolean;
  className?: string;
}

//publisher schema and it type inference
export const PublisherSchema = z.object({
  name: z
    .string()
    .min(3, "མིང་ཡིག་འབྲུ་གསུམ་ཡན་དགོས།")
    .regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
  location: z
    .string()
    .min(3, "ཆགས་ཡུལ་ཡིག་འབྲུ་གསུམ་ཡན་དགོས།")
    .regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
});
export type InputParchang = z.infer<typeof PublisherSchema>;

//mina type  and inference
export const MinaSchema = z.object({
  type: z.string().min(1, "རིགས་འདེམས་རོགས།"),
  name: z
    .string()
    .min(3, "མིང་ཡིག་འབྲུ་གསུམ་ཡན་དགོས།")
    .regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
  year_of_birth: z.number().min(1, "སྐྱེས་ལོ་ཨང་ཀི་ནང་འབྲི་རོགས།"),
  year_of_death: z.number().min(1, "འདས་ལོ་ཨང་ཀི་ནང་འབྲི་རོགས།"),
  nationality: z
    .string()
    .min(2, "མི་རིགས་ཡིག་འབྲུ་གཉིས་ཡན་དགོས།")
    .regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
});

export type InputMina = z.infer<typeof MinaSchema>;
