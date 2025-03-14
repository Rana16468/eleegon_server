export class CreateUserDto {
    
    name: string;
    email: string;
    password: string;
    role?: "USER" | "EMPLOYEE" | "ADMIN";

    constructor(name: string, email: string, password: string, role?: "USER" | "EMPLOYEE" | "ADMIN") {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role ?? "USER"; 
    }
}
