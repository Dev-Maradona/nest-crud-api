import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/service/auth/auth.service';

@Controller('users')
export class UsersController {

    constructor(private authService: AuthService) { };

    @UseGuards(AuthGuard('jwt'))
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
