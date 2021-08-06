import { MessagesListItemProps } from "./MessagesListItem.types";

export const MessagesListItem = ({ body, senderName }: MessagesListItemProps) => {
    return (
        <div>
            <p>{senderName}</p>
            <p>{body}</p>
        </div>
    );
};
