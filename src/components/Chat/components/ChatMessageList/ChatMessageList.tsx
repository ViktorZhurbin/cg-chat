import { useMessages } from "../../../../graphql/queries";

import { ChatMessageListItem } from "../ChatMessageListItem";

import { ChatMessageListStyled } from "./ChatMessageList.styled";
import { ChatMessageListProps } from "./ChatMessageList.types";

export const ChatMessageList = ({ userName }: ChatMessageListProps) => {
    const { loading, error, data } = useMessages();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data || error) {
        return <p>Could not get the messages</p>;
    }

    return (
        <ChatMessageListStyled>
            {data.messages.map(({ id, body, senderName }) => (
                <ChatMessageListItem key={id} body={body} isUser={senderName === userName} />
            ))}
        </ChatMessageListStyled>
    );
};
