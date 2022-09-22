import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import * as path from 'path';
import { CollectionItemsResolver } from './resolvers/collection-items.resolver';
import { CollectionItemsPaginationResolver } from './resolvers/collection-items-pagination.resolver';
import { CollectionsResolver } from './resolvers/collections.resolver';
import { erc721ValidatorProvider } from './services/erc721-validator/erc721-validator.provider';
import { metadataServiceProvider } from './services/metadata/metadata.service.provider';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({ isGlobal: true, ttl: 10 * 60 }), // TTL: 10 minutes
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.get<string>('NFTPORT_URL'),
        headers: {
          Authorization: configService.get<string>('NFTPORT_API_KEY'),
        },
        params: {
          chain: configService.get<string>('CHAIN'),
        },
      }),
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['./**/schema.graphql'],
      definitions: {
        path: path.join(process.cwd(), 'src/types.ts'),
        outputAs: 'class',
      },
    }),
  ],
  providers: [
    CollectionItemsResolver,
    CollectionItemsPaginationResolver,
    CollectionsResolver,
    erc721ValidatorProvider,
    metadataServiceProvider,
  ],
})
export class AppModule {}
