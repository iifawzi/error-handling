import { DomainError } from "../types";

export class UsernameTaken implements DomainError {
    public message: string;
  
    constructor (username: string) {
      this.message = `The ${username} is already in use.`
    }
  }