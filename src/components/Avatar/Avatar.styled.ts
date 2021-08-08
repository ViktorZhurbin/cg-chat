import styled from "styled-components";

export const AvatarStyled = styled.div`
    --size: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    height: var(--size);
    color: var(--color-white);
    background-color: var(--color-blue);
    border-radius: 50%;
    font-weight: 500;
`;
