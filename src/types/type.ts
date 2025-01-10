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
  title: z
    .string()
    .min(1, "Title is required")
    .regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
  shortentitle: z
    .string()
    .min(1, "Short title is required")
    .regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
  year_of_publish: z.number().min(1, "Publication year is required"),
  collection: z.string().regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
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

//word
export const WordSchema = z.object({
  lemma: z.string().min(1).regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
  is_mordern: z.boolean(),
  is_reviewed: z.boolean(),
  is_frequent: z.boolean(),
  originId: z.string(),
});

export type InputWord = z.infer<typeof WordSchema>;

const CitationSchema = z.object({
  text: z.string().min(1, {
    message:
      "མཆན་འགྲེལ་གྱི་ནང་དོན་སྟོང་པ་འཇོག་མི་ཆོག / Citation text cannot be empty",
  }),
  location: z.object({}).passthrough(),
  bookId: z.string(),
});
//sense
export const SenseSchema = z.object({
  description: z.string().min(1).regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
  has_illustration: z.boolean(),
  example_sentence: z
    .string()
    .min(1)
    .regex(tibetanRegex, "བོད་ཡིག་ནང་འབྲི་རོགས།"),
  posId: z.string(),
  name_entityId: z.string(),
  registerId: z.string(),
  wordId: z.number(),
  citationIds: z.array(CitationSchema).default([]),
});

export type InputSense = z.infer<typeof SenseSchema>;
