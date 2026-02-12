import { IconType } from "react-icons";

export interface PersonalInfo {
  img: string;
  name: string;
  nationality: string;
  residencePermit: string;
  phone: string;
  email: string;
  website: string;
  address: string;
}

export interface ExperienceAndEducationItem {
  title: string;
  institution: string;
  description: string;
  date: string;
  img?: string;
}

export interface SkillItem {
  name: string;
  percent: number;
}

export interface ProjectItem {
  img: string;
  title: string;
  description: string;
  link: string;
  icon?: IconType;
}

export interface Recommendation {
  avatar: string;
  name: string;
  position: string;
  date: string;
  text: string;
}

type ContactMethod = {
  type: "phone" | "email" | "github" | "website" | "whatsapp" | "linkedin";
  label: string;
  value: string;
};

export interface LinkItem {
  name: string;
  items: ContactMethod[];
  icon?: IconType;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface FullContent {
  overview?: string;
  continueOverview?: string;
  techs?: string[];
  experience?: ExperienceAndEducationItem[];
  techsIcons?: string[];
  recommendations?: Recommendation[];
  links?: LinkItem[];
  projects?: ProjectItem[];
  education?: ExperienceAndEducationItem[];
  skills?: SkillItem[];
  languages?: LanguageItem[];
}
