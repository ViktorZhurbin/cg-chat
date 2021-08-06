import { MessagesListItemProps } from "./MessagesListItem.types";

export const MessagesListItem = ({ body }: MessagesListItemProps) => {
    return <p>{body}</p>;
};
