import { Injectable } from '@nestjs/common'
import {
  User,
  UserCreateArgs,
  UserDeleteArgs,
  UserFindManyArgs,
  UserFindUniqueArgs,
  UserUpdateArgs,
} from '@prisma/client/generator-build'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: UserFindUniqueArgs): Promise<User | null> {
    return this.prisma.user.findUnique(args)
  }

  async findMany(args: UserFindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany(args)
  }

  async create(args: UserCreateArgs): Promise<User> {
    return this.prisma.user.create({
      ...args,
      data: {
        ...args.data,
        password: await bcrypt.hash(args.data.password, 10),
      },
    })
  }

  async update(args: UserUpdateArgs): Promise<User> {
    return this.prisma.user.update(args)
  }

  async delete(args: UserDeleteArgs): Promise<User> {
    return this.prisma.user.delete(args)
  }
}
