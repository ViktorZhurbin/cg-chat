import { useEffect } from "react";
import { useGetMessages } from "../../../../graphql/queries";
import { Avatar } from "../../../Avatar";

import { ChatMessageListItem } from "../ChatMessageListItem";

import { ChatMessageListStyled, InfoText, Wrapper } from "./ChatMessageList.styled";
import { ChatMessageListProps } from "./ChatMessageList.types";

export const CHAT_MESSAGES_LIST_ID = "chatMessagesList";

export const ChatMessageList = ({ userName }: ChatMessageListProps) => {
    const { loading, error, data } = useGetMessages();

    useEffect(() => {
        const messagesList = document.getElementById(CHAT_MESSAGES_LIST_ID);

        if (messagesList) {
            messagesList.scrollTop = messagesList.scrollHeight;
        }
    }, [data?.messages.length]);

    if (loading) {
        return <InfoText>Loading...</InfoText>;
    }

    if (!data || error) {
        return <InfoText>Could not get the messages :(</InfoText>;
    }

    return (
        <ChatMessageListStyled id={CHAT_MESSAGES_LIST_ID}>
            {data.messages.map(({ id, body, senderName }, index, messages) => {
                const isLast = index === messages.length - 1;
                const isLastInGroup = messages[index + 1]?.senderName !== senderName;

                return (
                    <Wrapper key={id} isUser={senderName === userName}>
                        <ChatMessageListItem body={body} />
                        {isLastInGroup && !isLast && <Avatar name={senderName} />}
                    </Wrapper>
                );
            })}
        </ChatMessageListStyled>
    );
};
