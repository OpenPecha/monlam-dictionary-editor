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

export interface InputTsigsar {
  matsig: string;
  newMatsig: boolean;
  gyunchoe: boolean;
}

export interface Props {
  popup: boolean[];
  setPopup: React.Dispatch<React.SetStateAction<boolean[]>>;
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

//person modal
export const PersonModalSchema = z.object({
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
// export type InputPersonModal = z.infer<typeof PersonModalSchema>;
// import { z } from "zod";

// Define your Zod schema for the form
export const PechaSchema = z.object({
  title: z.string().min(1, "Title is required"),
  shortentitle: z.string().min(1, "Short title is required"),
  year_of_publish: z.number().min(1, "Publication year is required"),
  collection: z.string(),
  print_methodId: z.string(),
  editorId: z.string(),
  tertonId: z.string(),
  authorId: z.string(),
  translatorId: z.string(),
  digital_ref: z.string(),
  publisherId: z.string(),
});

// Infer the type from the schema
export type InputPecha = z.infer<typeof PechaSchema>;

// Person Modal Input type
export type InputPersonModal = {
  name: string;
  year_of_birth?: number;
  year_of_death?: number;
  nationality?: string;
};
