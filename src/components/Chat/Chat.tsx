import { ChatHeader } from "./components/ChatHeader";
import { ChatInput } from "./components/ChatInput";
import { MessageList } from "./components/MessageList";

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
