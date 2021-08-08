import styled, { css } from "styled-components";
import { AvatarStyled } from "../../../Avatar";
import { ChatMessageListItemStyled } from "../ChatMessageListItem";

interface WrapperProps {
    isUser: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
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

export const InfoText = styled.p`
    margin: auto;
    color: var(--color-grey);
`;
