import { useRef, useState } from "react";

import { useSendMessage } from "../../../../graphql/mutations";
import { ChatInputStyled, Overlay, SendingMessage, Wrapper } from "./ChatInput.styled";
import { ChatInputProps } from "./ChatInput.types";

export const ChatInput = ({ userName }: ChatInputProps) => {
    const [message, setMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [sendMessage, { loading, error }] = useSendMessage({
        onCompleted: () => {
            setMessage("");
            inputRef?.current?.focus();
        },
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();

        setMessage(value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            inputRef?.current?.blur();
            sendMessage({
                variables: { body: message, senderName: userName },
            });
        }
    };

    if (error) {
        return <p>Submission error! {error.message}</p>;
    }

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
        </Wrapper>
    );
};
