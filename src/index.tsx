import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";

import { client } from "./config/apolloClient";

import { App } from "./App";
import { GlobalStyle } from "./globalStyle";

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <GlobalStyle />
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
