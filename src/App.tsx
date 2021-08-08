import { ApolloProvider } from "@apollo/client";

import { client } from "@/config/apolloClient";
import { Chat } from "@/components/Chat";

import { GlobalStyle } from "./globalStyle";

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Chat />
        </ApolloProvider>
    );
};
