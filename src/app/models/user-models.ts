export class IResult {
  public results: IUser[];
  public info: IInfo[];
}

export class IInfo {
  public seed: string;
}

export class IUser {
  public gender: string;
  public name: IName;
  public picture: IImage;
  public email: string;
  public dob?: IDob;
  public id: IId;
  public pohone: string;
  public nat: string;
}

export class IDob {
  age?: number;
  date?: string;
}
export class IId {
  name?: string;
  value?: string;
}

export class IName {
  public title?: string;
  public first: string;
  public last: string;
}

export class IImage {
  public large: string;
}
