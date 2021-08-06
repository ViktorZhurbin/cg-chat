import { ApolloClient, InMemoryCache } from "@apollo/client";

let headers = {};

if (process.env.REACT_APP_HASURA_ADMIN_SECRET) {
    headers = { "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET };
}

export const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers,
});
