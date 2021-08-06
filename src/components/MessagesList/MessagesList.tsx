import { useQuery, gql } from "@apollo/client";

import { MessagesListItem } from "../MessagesListItem";

import { MessageData } from "./MessagesList.types";

const MESSAGES = gql`
    query getMessages {
        messages(limit: 50, order_by: { id: asc }) {
            id
            body
            senderName
        }
    }
`;

export const MessagesList = () => {
    const { loading, error, data } = useQuery<MessageData>(MESSAGES);

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
