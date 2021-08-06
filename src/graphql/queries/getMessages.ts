import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
    query getMessages {
        messages(limit: 50, order_by: { id: asc }) {
            id
            body
            senderName
        }
    }
`;
