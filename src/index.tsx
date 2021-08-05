import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./App";

const client = new ApolloClient({
    uri: "https://guided-ferret-24.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "eVsdOYwA85ygQDejX1eojS1A2OLab4d2tZb3aWWXJuQUrpSk7euySuWvCbIuxen5",
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
