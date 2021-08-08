import { Avatar } from "@/components/Avatar";

import { ChatHeaderStyled, CloseIcon, NameStyled, UserWrapper } from "./ChatHeader.styled";
import { ChatHeaderProps } from "./ChatHeader.types";

const name = "Kubota";

export const ChatHeader = ({ onClose }: ChatHeaderProps) => {
    return (
        <ChatHeaderStyled>
            <UserWrapper>
                <Avatar name={name} />
                <NameStyled>{name}</NameStyled>
            </UserWrapper>
            <CloseIcon onClick={onClose} />
        </ChatHeaderStyled>
    );
};
