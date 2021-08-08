import styled, { css } from "styled-components";
import { AvatarStyled } from "../../../Avatar";
import { ChatMessageListItemStyled } from "../ChatMessageListItem/ChatMessageListItem.styled";

interface WrapperProps {
    isUser: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    display: grid;
    gap: 5px;

    ${AvatarStyled} {
        --size: 12px;

        font-size: 0.5rem;
        justify-self: end;
    }

    ${({ isUser }) =>
        isUser &&
        css`
            ${ChatMessageListItemStyled} {
                justify-self: start;
                color: var(--color-charcoal);
                background-color: var(--color-bg-grey);
            }

            ${AvatarStyled} {
                justify-self: start;
            }
        `}
`;

export const ChatMessageListStyled = styled.div`
    display: grid;
    gap: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior-y: contain;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;
