import { Message } from "../../types/Message";

export interface MessageListItemProps extends Pick<Message, "body"> {
    isUser: boolean;
}
