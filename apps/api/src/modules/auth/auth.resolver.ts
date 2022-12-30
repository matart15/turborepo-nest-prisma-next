import { UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '@prisma/client'

import { AuthService } from './auth.service'
import { CurrentUser } from './decorators/current-user.decorator'
import { CurrentUserResponse } from './dto/current-user.response'
import { UserSignInInput } from './dto/user-sign-in.input'
import { UserSignInResponse } from './dto/user-sign-in.response'
import { UserSignUpInput } from './dto/user-sign-up.input'
import { GqlAuthGuard } from './guards/gql-auth.guard'
import { JwtAuthGuard } from './guards/jwt-auth.guard'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => CurrentUserResponse, { name: 'currentUser' })
  @UseGuards(JwtAuthGuard)
  getCurrentUser(@CurrentUser() user: User) {
    return user
  }

  @Mutation(() => Boolean)
  signUpUser(@Args('data') userSignUpInput: UserSignUpInput) {
    return this.authService.signUpUser(userSignUpInput)
  }

  @Mutation(() => UserSignInResponse)
  @UseGuards(GqlAuthGuard)
  signInUser(@Args('data') userSignInInput: UserSignInInput, @Context() context) {
    return this.authService.signInUser(context.user)
  }
}
