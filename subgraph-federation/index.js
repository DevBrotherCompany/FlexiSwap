const { loadSchema } = require('@graphql-tools/load');
const { UrlLoader } = require('@graphql-tools/url-loader');
const { transformSchemaFederation } = require('graphql-transform-federation');
const { ApolloServer } = require('apollo-server');
const dotenv = require('dotenv');

dotenv.config();

async function bootstrap() {
  const schemaWithoutFederation = await loadSchema(process.env.SUBGRAPH_URL, {
    loaders: [new UrlLoader()],
  });

  const schema = transformSchemaFederation(schemaWithoutFederation, {
    Query: {
      extend: true,
    },
  });

  await new ApolloServer({ schema }).listen(process.env.PORT);
}
bootstrap();
