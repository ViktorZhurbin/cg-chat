import { Avatar } from "../Avatar";

import { ChatHeaderStyled, NameStyled } from "./ChatHeader.styled";

const name = "Kubota";

export const ChatHeader = () => {
    return (
        <ChatHeaderStyled>
            <Avatar name={name} />
            <NameStyled>{name}</NameStyled>
        </ChatHeaderStyled>
    );
};
