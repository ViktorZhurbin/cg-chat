import { ChatMessageListItemStyled } from "./ChatMessageListItem.styled";
import { ChatMessageListItemProps } from "./ChatMessageListItem.types";

export const ChatMessageListItem = ({ body }: ChatMessageListItemProps) => {
    return <ChatMessageListItemStyled>{body}</ChatMessageListItemStyled>;
};
