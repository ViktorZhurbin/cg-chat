import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`;

export const ChatInputStyled = styled.input`
    font-size: 1rem;
    line-height: 1.25rem;
    border: none;
    outline: none;
`;

export const Overlay = styled.div`
    cursor: default;
    background-color: var(--color-bg-grey);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
`;

export const SendingMessage = styled.div`
    --height: 0.75rem;

    font-size: var(--height);
    position: absolute;
    top: calc(-1 * var(--height));
    right: 10px;
    color: var(--color-grey);
    background-color: var(--color-white);
`;
