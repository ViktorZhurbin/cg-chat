import styled from "styled-components";

import { ChatIcon } from "@/components/ChatIcon";

import { ChatHeaderStyled } from "./components/ChatHeader";
import { ChatInputStyled } from "./components/ChatInput";
import { ChatMessageListStyled } from "./components/ChatMessageList";

export const Wrapper = styled.div`
    --offset: 20px;

    position: absolute;
    right: var(--offset);
    bottom: var(--offset);
`;

export const ChatStyled = styled.div`
    --margin: 32px;
    --padding: 16px 24px;

    display: flex;
    flex-direction: column;
    width: 360px;
    height: 90vh;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 0px slategrey;
    overflow-y: auto;

    ${ChatHeaderStyled} {
        padding: var(--padding);
    }

    ${ChatMessageListStyled} {
        padding: var(--padding);
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
