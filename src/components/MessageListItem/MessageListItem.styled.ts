import styled, { css } from "styled-components";
import { MessageListItemProps } from "./MessageListItem.types";

type ListItemProps = Pick<MessageListItemProps, "isUser">;

export const MessageListItemStyled = styled.p`
    width: auto;
    margin: 0;
    padding: 8px;
    border-radius: 8px;
    justify-self: end;
    color: var(--color-white);
    background-color: var(--color-bg-black);
    font-size: 1rem;
    line-height: 1.25rem;

    ${({ isUser }: ListItemProps) =>
        isUser &&
        css`
            background-color: var(--color-bg-grey);
            color: var(--color-charcoal);
            justify-self: start;
        `};
`;
