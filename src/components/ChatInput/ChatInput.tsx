import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

import { Message } from "../../types/Message";

import { NewMessagePayload } from "./ChatInput.types";

const SEND_MESSAGE = gql`
    mutation sendMessage($body: String, $senderName: String) {
        insert_messages_one(object: { body: $body, senderName: $senderName }) {
            id
            body
            senderName
        }
    }
`;

export const ChatInput = () => {
    const [message, setMessage] = useState("");
    const [sendMessage, { loading, error }] = useMutation<Message, NewMessagePayload>(
        SEND_MESSAGE,
        {
            variables: { body: message, senderName: "Vi" },
        }
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();

        setMessage(value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    if (loading) {
        return <p>Sending...</p>;
    }

    if (error) {
        return <p>Submission error! {error.message}</p>;
    }

    return <input placeholder="Message" onChange={handleChange} onKeyDown={handleKeyDown} />;
};
