import { gql, useQuery } from "@apollo/client";

import { Message } from "../../types/Message";

export const GET_MESSAGES = gql`
    query getMessages {
        messages(limit: 50, order_by: { id: asc }) {
            id
            body
            senderName
        }
    }
`;

export const useMessages = () => useQuery<{ messages: Message[] }>(GET_MESSAGES);
