export class User {
  constructor(public email: string,
              public name: string,
              private password: string){}

  matches(another: User): boolean {
    return another !== undefined &&
      another.email === this.email &&
      another.password === this.password
  }
}

export const users: {[key:string]: User}  = {
  "thomaz@gmail.com": new User('thomaz@gmail.com', 'Thomaz', 'thom2004'),
  "monica@gmail.com": new User('monica@gmail.com', 'Monica', 'moni2004')
}
