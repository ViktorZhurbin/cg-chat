import { gql, MutationHookOptions, useMutation } from "@apollo/client";

import { SendMessagePayload, Message } from "../../types/Message";

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

export const useSendMessage = (options?: MutationHookOptions<Message, SendMessagePayload>) =>
    useMutation<Message, SendMessagePayload>(SEND_MESSAGE, {
        refetchQueries: [GET_MESSAGES],
        ...options,
    });
