import { AvatarStyled } from "./Avatar.styled";
import { AvatarProps } from "./Avatar.types";

export const Avatar = ({ name }: AvatarProps) => (
    <AvatarStyled title={name}>{name.charAt(0)}</AvatarStyled>
);
