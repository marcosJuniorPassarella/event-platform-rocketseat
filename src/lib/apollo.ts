import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4yqjhqt08ge01uh2u2jgwdx/master",
  cache: new InMemoryCache(),
});
