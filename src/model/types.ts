
export interface IBasicInfo {
  basic: IBasicData;
  contact: IContactInfo;
  websites: IWebsites;
  workExperience: IWorkExperienceItem[];
  technicalSkills: TechnicalSkillsMap;
}

export interface IBasicData {
  name: string;
  title: string;
  subtitle: string;
}

export interface IContactInfo {
  email: string;
  phoneNumber: string;
}

export interface IWebsites {
  linkedIn: string;
  github: string;
  stackOverflow: string;
}

export interface IWorkExperienceItem {
  companyName: string;
  companyLogoUrl: string;
  position: string;
  startDate: Date;
  endDate: Date | string;
  description: string[];
}

export interface ITechnicalSkill {
  name: string;
  description?: string;
  level: number;  // 1 - 10
}

export interface ITechnicalSkillGroup {
  logo: string;
  skills: ITechnicalSkill[];
}

export type TechnicalSkillsMap = { [category: string]: ITechnicalSkillGroup };
