import { Injectable } from '@nestjs/common';

export interface UserInterface {
    name: string;
    age: number;
    number: string;
    email: string;
    password: string;

}


@Injectable()
export class UserService {

    createUser(): UserInterface {

        const data: UserInterface = {
            name: "Sohel Rana",
            age: 25,
            number: "01722305054",
            email: "amsr215019@gmail.com",
            password: "215019AS51758"

        };
        return data;
    }
    

}
