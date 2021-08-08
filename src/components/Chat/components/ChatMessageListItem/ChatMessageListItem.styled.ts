import styled, { css } from "styled-components";
import { ChatMessageListItemProps } from "./ChatMessageListItem.types";

type ChatMessageListItemStyledProps = Pick<ChatMessageListItemProps, "isUser">;

export const ChatMessageListItemStyled = styled.p`
    margin: 0;
    padding: 8px;
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.25rem;
    justify-self: end;
    color: var(--color-white);
    background-color: var(--color-bg-black);

    ${({ isUser }: ChatMessageListItemStyledProps) =>
        isUser &&
        css`
            justify-self: start;
            color: var(--color-charcoal);
            background-color: var(--color-bg-grey);
        `};
`;
