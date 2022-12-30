import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'

import { UsersService } from '../users/users.service'
import { UserSignInResponse } from './dto/user-sign-in.response'
import { UserSignUpInput } from './dto/user-sign-up.input'
import { JwtPayload } from './interfaces/jwt-payload.interface'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findUnique({
      where: { email },
    })

    if (user && bcrypt.compareSync(password, user.password)) {
      return user
    }

    return null
  }

  async signUpUser(data: UserSignUpInput): Promise<boolean> {
    const user = await this.usersService.create({
      data: {
        email: data.email,
        password: data.password,
      },
    })

    return !!user
  }

  async signInUser(user: User): Promise<UserSignInResponse> {
    const payload: JwtPayload = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['admin', 'user'],
        'x-hasura-default-role': 'user',
        'x-hasura-user-id': user.id,
        'x-hasura-role': 'user',
      },
      sub: user.id,
      iat: Date.now() / 1000,
    }

    return {
      jwtToken: this.jwtService.sign(payload, {
        expiresIn: '30d', // 30日間
      }),
    }
  }
}
