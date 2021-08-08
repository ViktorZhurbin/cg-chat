import { ChatMessageListItemStyled } from "./ChatMessageListItem.styled";
import { ChatMessageListItemProps } from "./ChatMessageListItem.types";

export const ChatMessageListItem = ({ body, isUser }: ChatMessageListItemProps) => {
    return <ChatMessageListItemStyled isUser={isUser}>{body}</ChatMessageListItemStyled>;
};
