import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import {User} from '@prisma/client'
import { Prisma } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
    export class UserController {
        @Get('me')
        getMe(@GetUser() user: User) {
            return user
        }
    }
