import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserSignUpInput {
  @Field()
  email: string

  @Field()
  password: string
}
