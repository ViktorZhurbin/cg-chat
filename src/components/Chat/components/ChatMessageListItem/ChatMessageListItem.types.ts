import { Message } from "../../../../types/Message";

export interface ChatMessageListItemProps extends Pick<Message, "body"> {
    isUser: boolean;
}
