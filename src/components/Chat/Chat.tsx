import { useState } from "react";

import { ChatHeader } from "./components/ChatHeader";
import { ChatInput } from "./components/ChatInput";
import { MessageList } from "./components/MessageList";

import { ChatIconStyled, ChatStyled, Wrapper } from "./Chat.styled";

const userName = "Viktor";

export const Chat = () => {
    const [isOpen, setOpen] = useState(true);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <Wrapper>
            {isOpen ? (
                <ChatStyled>
                    <ChatHeader onClose={handleClose} />
                    <MessageList userName={userName} />
                    <ChatInput userName={userName} />
                </ChatStyled>
            ) : (
                <ChatIconStyled onClick={handleOpen} />
            )}
        </Wrapper>
    );
};
