import { DomainError } from "../types";

export class UserAlreadyExists implements DomainError {
    public message: string;
  
    constructor (username: string) {
      this.message = `The username ${username} is already taken.`
    }
  }