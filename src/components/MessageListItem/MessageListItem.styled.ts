import styled from "styled-components";
import { MessageListItemProps } from "./MessageListItem.types";

type ListItemProps = Pick<MessageListItemProps, "isUser">;

export const ListItem = styled.p`
    width: max-content;
    margin: 0;
    padding: 8px;
    border-radius: 8px;
    justify-self: end;
    color: #fff;
    background-color: #2a2a2a;

    ${({ isUser }: ListItemProps) =>
        isUser &&
        `
        background-color: #f3f1f1;
        color: #000;
        justify-self: start;
    `};
`;
