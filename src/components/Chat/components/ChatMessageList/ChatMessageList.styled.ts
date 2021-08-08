import styled from "styled-components";

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
