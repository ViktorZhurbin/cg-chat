import { ChatHeader } from "../ChatHeader";
import { ChatInput } from "../ChatInput";
import { MessageList } from "../MessageList";

import { ChatStyled } from "./Chat.styled";

export const Chat = () => {
    const userName = "Viktor";

    return (
        <ChatStyled>
            <ChatHeader />
            <MessageList userName={userName} />
            <ChatInput userName={userName} />
        </ChatStyled>
    );
};
