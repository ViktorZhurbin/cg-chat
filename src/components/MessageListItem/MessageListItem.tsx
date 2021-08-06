import { ListItem } from "./MessageListItem.styled";
import { MessageListItemProps } from "./MessageListItem.types";

export const MessageListItem = ({ body, isUser }: MessageListItemProps) => {
    return <ListItem isUser={isUser}>{body}</ListItem>;
};
