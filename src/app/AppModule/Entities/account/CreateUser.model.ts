import { LogIn } from "./LogIn.model";

export class CreateUser implements LogIn{
    
    email: string;
    password: string;
    name: string;
    lastName: string;

    constructor(
        email: string,
        password: string,
        name: string,
        lastName: string) {
        
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
    }
}