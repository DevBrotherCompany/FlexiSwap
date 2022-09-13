import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = process.env.REACT_APP_GRAPHQL_URL ?? "http://localhost:8020";

export const apolloClient = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});
