import { useMessages } from "../../graphql/queries";

import { MessageListItem } from "../MessageListItem";
import { List } from "./MessageList.styled";
import { MessageListProps } from "./MessageList.types";

export const MessageList = ({ userName }: MessageListProps) => {
    const { loading, error, data } = useMessages();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data || error) {
        return <p>Could not get the messages</p>;
    }

    return (
        <List>
            {data.messages.map(({ id, body, senderName }) => (
                <MessageListItem key={id} body={body} isUser={senderName === userName} />
            ))}
        </List>
    );
};
