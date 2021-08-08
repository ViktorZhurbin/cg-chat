import { useMessages } from "../../../../graphql/queries";
import { Avatar } from "../../../Avatar";

import { ChatMessageListItem } from "../ChatMessageListItem";

import { ChatMessageListStyled, LoadingStyled, Wrapper } from "./ChatMessageList.styled";
import { ChatMessageListProps } from "./ChatMessageList.types";

export const ChatMessageList = ({ userName }: ChatMessageListProps) => {
    const { loading, error, data } = useMessages();

    if (loading) {
        return <LoadingStyled>Loading...</LoadingStyled>;
    }

    if (!data || error) {
        return <p>Could not get the messages</p>;
    }

    return (
        <ChatMessageListStyled>
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
