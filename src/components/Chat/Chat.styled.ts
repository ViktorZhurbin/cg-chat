import styled from "styled-components";
import { ChatIcon } from "../ChatIcon";

import { ChatHeaderStyled } from "./components/ChatHeader";
import { ChatInputStyled } from "./components/ChatInput";
import { MessageListStyled } from "./components/MessageList";

export const Wrapper = styled.div`
    --offset: 20px;

    position: absolute;
    right: var(--offset);
    bottom: var(--offset);
`;

export const ChatStyled = styled.div`
    --padding: 24px;
    --margin: 32px;

    display: flex;
    flex-direction: column;
    max-width: 360px;
    max-height: 90vh;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 0px slategrey;
    overflow-y: auto;

    ${ChatHeaderStyled} {
        padding: var(--padding);
    }

    ${MessageListStyled} {
        padding: 0 var(--padding);
    }

    ${ChatInputStyled} {
        padding: var(--padding);
    }
`;

export const ChatIconStyled = styled(ChatIcon)`
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.1s ease-in;

    :hover {
        transform: scale(1.2);
    }
`;
