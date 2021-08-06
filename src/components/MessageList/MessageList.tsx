import { useMessages } from "../../graphql/queries";

import { MessageListItem } from "../MessageListItem";

export const MessageList = () => {
    const { loading, error, data } = useMessages();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data || error) {
        return <p>Could not get the messages</p>;
    }

    return (
        <div>
            {/* TODO: group messages by senderName */}
            {data.messages.map(({ id, body, senderName }) => (
                <MessageListItem key={id} body={body} />
            ))}
        </div>
    );
};
