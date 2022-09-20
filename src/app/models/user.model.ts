export class User {


  constructor(
    public _id?: string,
    public firstName?: string,
    public lastName?: string,
    public profileImg?: string,
    public role?: string,
    public email?: string,
    public password?: string,
    public confirmPassword?: string,
    public passwordChangedAt?: string,
    public active?: boolean,
  ) {
  }
}


