export interface ILoqateOptions {
  key: string;
  origin?: string;
  countries?: string[];
}

export interface IReqOptions {
  params: IParams;
}

export interface IParams {
  Text?: string;
  Countries?: string[];
  Origin?: string;
  Id?: number;
  Key?: string;
}
