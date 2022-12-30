import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserSignInResponse {
  @Field()
  jwtToken: string
}
