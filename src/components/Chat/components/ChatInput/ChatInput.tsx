import { useState } from "react";

import { useSendMessage } from "../../../../graphql/mutations";
import { ChatInputStyled } from "./ChatInput.styled";
import { ChatInputProps } from "./ChatInput.types";

export const ChatInput = ({ userName }: ChatInputProps) => {
    const [message, setMessage] = useState("");
    const [sendMessage, { loading, error }] = useSendMessage();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();

        setMessage(value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            sendMessage({
                variables: { body: message, senderName: userName },
            });
        }
    };

    if (loading) {
        return <p>Sending...</p>;
    }

    if (error) {
        return <p>Submission error! {error.message}</p>;
    }

    return (
        <ChatInputStyled placeholder="Message" onChange={handleChange} onKeyDown={handleKeyDown} />
    );
};
