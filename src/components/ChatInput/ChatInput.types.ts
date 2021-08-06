import { SendMessagePayload } from "../../types/Message";

export interface ChatInputProps {
    onSubmit: (payload: SendMessagePayload) => void;
}
