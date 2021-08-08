import styled, { css } from "styled-components";

import { AvatarStyled } from "@/components/Avatar";

import { ChatMessageListItemStyled } from "../ChatMessageListItem";

interface MessageGroupWrapperProps {
    isUser: boolean;
}

export const MessageGroupWrapper = styled.div<MessageGroupWrapperProps>`
    display: grid;
    gap: 5px;
    justify-content: end;

    ${AvatarStyled} {
        --size: 12px;

        font-size: 0.5rem;
        justify-self: end;
    }

    ${({ isUser }) =>
        isUser &&
        css`
            justify-content: start;

            ${ChatMessageListItemStyled} {
                color: var(--color-charcoal);
                background-color: var(--color-bg-grey);
            }
        `}
`;

export const ChatMessageListStyled = styled.div`
    flex: 1;
    display: grid;
    gap: 8px;
    align-content: start;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior-y: contain;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const InfoText = styled.p`
    margin: auto;
    color: var(--color-grey);
`;
