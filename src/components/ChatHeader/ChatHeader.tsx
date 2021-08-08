import { Avatar } from "../Avatar";

import { ChatHeaderStyled, CloseStyled, NameStyled, UserWrapper } from "./ChatHeader.styled";

const name = "Kubota";

export const ChatHeader = () => {
    return (
        <ChatHeaderStyled>
            <UserWrapper>
                <Avatar name={name} />
                <NameStyled>{name}</NameStyled>
            </UserWrapper>
            <CloseStyled />
        </ChatHeaderStyled>
    );
};
