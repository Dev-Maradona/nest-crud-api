import { Module } from '@nestjs/common';
import { UsersService } from './service/users/users.service';
import { UsersController } from './controllers/users/users.controller';
import { AuthService } from 'src/auth/service/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UsersService, AuthService, JwtService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
