import styled from "styled-components";

export const MessageListStyled = styled.div`
    display: grid;
    gap: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    overscroll-behavior-y: contain;

    &::-webkit-scrollbar {
        display: none;
    }
`;
