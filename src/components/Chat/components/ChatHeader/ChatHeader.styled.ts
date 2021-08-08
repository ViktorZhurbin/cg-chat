import styled from "styled-components";

export const ChatHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-bg-grey);
    box-shadow: 0 0 4px #ccc8c8;
`;

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const NameStyled = styled.span`
    font-weight: 500;
    line-height: 1.45rem;
    font-size: 1.2rem;
    margin-left: 10px;
`;

export const CloseIcon = styled.div`
    --size: 24px;

    position: relative;
    width: var(--size);
    height: var(--size);
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.1s ease-in;

    :hover {
        opacity: 1;
    }

    ::before,
    ::after {
        content: "";
        position: absolute;
        left: 50%;
        height: inherit;
        width: 2px;
        background-color: var(--color-grey);
    }

    ::before {
        transform: rotate(-45deg);
    }

    ::after {
        transform: rotate(45deg);
    }
`;
