import { CreateMessagePayload } from "../../types/Message";

export interface ChatInputProps {
    onSubmit: (payload: CreateMessagePayload) => void;
}
