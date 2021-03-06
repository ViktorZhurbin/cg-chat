import { useRef, useState } from "react";

import { useCreateMessage } from "@/graphql/messages";

import {
    ChatInputStyled,
    ErrorMessage,
    Overlay,
    SendingMessage,
    Wrapper,
} from "./ChatInput.styled";
import { ChatInputProps } from "./ChatInput.types";

export const ChatInput = ({ userName }: ChatInputProps) => {
    const [message, setMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [createMessage, { loading, error }] = useCreateMessage({
        onCompleted: () => {
            setMessage("");
            inputRef?.current?.focus();
        },
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            inputRef?.current?.blur();
            createMessage({
                variables: { body: message, senderName: userName },
            });
        }
    };

    return (
        <Wrapper>
            <ChatInputStyled
                ref={inputRef}
                placeholder="Message"
                value={message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {loading && (
                <>
                    <Overlay />
                    <SendingMessage>Sending...</SendingMessage>
                </>
            )}
            {error && <ErrorMessage>Sending error</ErrorMessage>}
        </Wrapper>
    );
};
