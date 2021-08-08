import { gql, MutationHookOptions, useMutation } from "@apollo/client";

import { CreateMessagePayload, Message } from "../../types/Message";

import { GET_MESSAGES } from "../queries";

export const CREATE_MESSAGE = gql`
    mutation sendMessage($body: String, $senderName: String) {
        insert_messages_one(object: { body: $body, senderName: $senderName }) {
            id
            body
            senderName
        }
    }
`;

export const useCreateMessage = (options?: MutationHookOptions<Message, CreateMessagePayload>) =>
    useMutation<Message, CreateMessagePayload>(CREATE_MESSAGE, {
        refetchQueries: [GET_MESSAGES],
        ...options,
    });
