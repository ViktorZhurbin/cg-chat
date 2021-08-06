import { useQuery } from "@apollo/client";

import { GET_MESSAGES } from "../../graphql/queries";
import { MessagesListItem } from "../MessagesListItem";

import { MessageData } from "./MessagesList.types";

export const MessagesList = () => {
    const { loading, error, data } = useQuery<MessageData>(GET_MESSAGES);

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
                <MessagesListItem key={id} body={body} />
            ))}
        </div>
    );
};
