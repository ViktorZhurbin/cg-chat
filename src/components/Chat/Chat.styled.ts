import styled from "styled-components";

import { ChatHeaderStyled } from "./components/ChatHeader";
import { ChatInputStyled } from "./components/ChatInput";
import { MessageListStyled } from "./components/MessageList";

export const ChatStyled = styled.div`
    --padding: 24px;
    --margin: 32px;

    display: flex;
    flex-direction: column;
    max-width: 360px;
    max-height: calc(100vh - var(--margin) * 2);
    margin: var(--margin) auto;
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
