import { gql, useMutation } from "@apollo/client";

import { CreateMessagePayload, Message } from "../../types/Message";

import { GET_MESSAGES } from "../queries";

export const SEND_MESSAGE = gql`
    mutation sendMessage($body: String, $senderName: String) {
        insert_messages_one(object: { body: $body, senderName: $senderName }) {
            id
            body
            senderName
        }
    }
`;

export const useSendMessage = () =>
    useMutation<Message, CreateMessagePayload>(SEND_MESSAGE, { refetchQueries: [GET_MESSAGES] });
