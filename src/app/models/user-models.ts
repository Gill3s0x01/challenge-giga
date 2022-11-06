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
  public age?: number;
  public date?: string;
}
export class IId {
  public name?: string;
  public value?: string;
}

export class IName {
  public title?: string;
  public first: string;
  public last: string;
}

export class IImage {
  public large: string;
}
