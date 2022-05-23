import { Injectable } from '@nestjs/common';

// Should be entity
export type User = any;

@Injectable()
export class UsersService {

    private readonly users = [
        {
            userId: 1,
            username: 'mohamed',
            password: 'mohamed',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
