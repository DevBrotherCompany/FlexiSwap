const { ApolloGateway, IntrospectAndCompose } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server');
const dotenv = require('dotenv');

dotenv.config();

async function bootstrap() {
  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: 'trades', url: process.env.GRAPHQL_TRADES_URL },
        { name: 'metadata', url: process.env.GRAPHQL_METADATA_URL },
      ],
    }),
  });
  await new ApolloServer({ gateway }).listen(process.env.PORT);
}
bootstrap();
