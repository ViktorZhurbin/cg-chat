import { MessageListItemProps } from "./MessageListItem.types";

export const MessageListItem = ({ body }: MessageListItemProps) => {
    return <p>{body}</p>;
};
