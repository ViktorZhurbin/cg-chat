import { useState } from "react";

import { useSendMessage } from "../../graphql/mutations";

export const ChatInput = () => {
    const [message, setMessage] = useState("");
    const [sendMessage, { loading, error }] = useSendMessage();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();

        setMessage(value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            sendMessage({
                variables: { body: message, senderName: "Viktor" },
            });
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
