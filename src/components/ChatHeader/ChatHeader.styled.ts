import styled from "styled-components";

export const ChatHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 0 var(--chat-padding);
    height: 60px;
    background-color: var(--color-bg-grey);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

export const NameStyled = styled.span`
    font-weight: 500;
    line-height: 1.45rem;
    font-size: 1.2rem;
    margin-left: 10px;
`;
