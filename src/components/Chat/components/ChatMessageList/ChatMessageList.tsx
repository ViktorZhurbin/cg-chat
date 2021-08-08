import { useEffect, useRef } from "react";

import { useGetMessages } from "@/graphql/queries";
import { Avatar } from "@/components/Avatar";

import { ChatMessageListItem } from "../ChatMessageListItem";

import { ChatMessageListStyled, InfoText, Wrapper } from "./ChatMessageList.styled";
import { ChatMessageListProps } from "./ChatMessageList.types";

export const ChatMessageList = ({ userName }: ChatMessageListProps) => {
    const { loading, error, data } = useGetMessages();
    const messagesListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesListRef?.current) {
            const element = messagesListRef?.current;

            element.scrollTop = element.scrollHeight;
        }
    }, [data?.messages?.length]);

    if (loading) {
        return <InfoText>Loading...</InfoText>;
    }

    if (!data || error) {
        return <InfoText>Could not get the messages :(</InfoText>;
    }

    return data.messages.length ? (
        <ChatMessageListStyled ref={messagesListRef}>
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
    ) : (
        <InfoText>There are no messages yet</InfoText>
    );
};
