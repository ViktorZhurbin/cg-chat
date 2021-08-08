import styled from "styled-components";

export const ChatStyled = styled.div`
    display: grid;
    position: relative;
    grid-template-rows: 1fr max-content;
    gap: 28px;
    margin: 32px auto;
    max-width: 360px;
    padding: 24px;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 0px slategrey;
    max-height: 90vh;
    overflow-y: auto;
`;
