
export interface IBasicInfo {
  basic: IBasicData;
  contact: IContactInfo;
  websites: IWebsites;
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
