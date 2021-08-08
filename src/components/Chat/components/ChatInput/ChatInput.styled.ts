import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`;

export const ChatInputStyled = styled.input`
    font-size: 1rem;
    line-height: 1.25rem;
    border: none;
    outline: none;
    width: 100%;
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

const infoMessageStyle = css`
    --height: 0.75rem;

    font-size: var(--height);
    position: absolute;
    top: calc(-1 * var(--height));
    right: 10px;
    background-color: var(--color-white);
`;

export const SendingMessage = styled.div`
    ${infoMessageStyle}

    color: var(--color-grey);
`;

export const ErrorMessage = styled.div`
    ${infoMessageStyle}

    color: red;
`;
