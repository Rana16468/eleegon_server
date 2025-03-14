import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('/create_user')
    createUser() {
        return {
            success: true,
            status: 200,
            message: "Successfully create user",
            result: this.userService.createUser()
        }
    }
    // post ---> new social medial auth
    @Post("/social_media_login")
    socialMediaLogin(@Body() data) {

        return data

    }

}
