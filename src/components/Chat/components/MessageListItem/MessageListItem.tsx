import { MessageListItemStyled } from "./MessageListItem.styled";
import { MessageListItemProps } from "./MessageListItem.types";

export const MessageListItem = ({ body, isUser }: MessageListItemProps) => {
    return <MessageListItemStyled isUser={isUser}>{body}</MessageListItemStyled>;
};
