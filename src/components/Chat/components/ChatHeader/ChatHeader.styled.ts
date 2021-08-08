import styled from "styled-components";

export const ChatHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: var(--color-bg-grey);
    width: 100%;
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

export const CloseStyled = styled.div`
    --size: 28px;

    position: relative;
    width: var(--size);
    height: var(--size);
    cursor: pointer;
    opacity: 0.6;

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
        background-color: #828181;
    }

    ::before {
        transform: rotate(-45deg);
    }

    ::after {
        transform: rotate(45deg);
    }
`;
