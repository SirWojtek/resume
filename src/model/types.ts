
export interface IBasicInfo {
  basic: IBasicData;
  contact: IContactInfo;
  websites: IWebsites;
  workExperience: IWorkExperienceItem[];
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
