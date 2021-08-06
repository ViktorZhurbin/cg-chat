import { Message } from "../../types/Message";

export type NewMessagePayload = Pick<Message, "body" | "senderName">;

export interface ChatInputProps {
    onSubmit: (payload: NewMessagePayload) => void;
}
