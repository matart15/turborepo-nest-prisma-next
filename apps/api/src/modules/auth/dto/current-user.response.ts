import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CurrentUserResponse {
  @Field()
  id: string

  @Field()
  email: string
}
