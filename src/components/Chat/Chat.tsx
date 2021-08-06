import { ChatInput } from "../ChatInput";
import { MessageList } from "../MessageList";

export const Chat = () => {
    const userName = "Viktor";

    return (
        <div>
            <MessageList userName={userName} />
            <ChatInput userName={userName} />
        </div>
    );
};
