import { useMessages } from "../../graphql/queries";

import { MessageListItem } from "../MessageListItem";
import { MessageListStyled } from "./MessageList.styled";
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
        <MessageListStyled>
            {data.messages.map(({ id, body, senderName }) => (
                <MessageListItem key={id} body={body} isUser={senderName === userName} />
            ))}
        </MessageListStyled>
    );
};
