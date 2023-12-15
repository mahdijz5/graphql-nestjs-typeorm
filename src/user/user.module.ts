import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserResolver } from './user.resolver';

@Module({
  imports: [

  ],
  providers : [UserResolver]
})
export class UserModule {}