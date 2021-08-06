import styled from "styled-components";

export const MessageListStyled = styled.div`
    display: grid;
    gap: 8px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;
