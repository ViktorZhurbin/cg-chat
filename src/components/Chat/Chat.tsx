import { ChatHeader } from "../ChatHeader";
import { ChatInput } from "../ChatInput";
import { MessageList } from "../MessageList";

import { ChatStyled } from "./Chat.styled";

const userName = "Viktor";

export const Chat = () => {
    return (
        <ChatStyled>
            <ChatHeader />
            <MessageList userName={userName} />
            <ChatInput userName={userName} />
        </ChatStyled>
    );
};
