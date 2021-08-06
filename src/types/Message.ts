export interface Message {
    id: number;
    body: string;
    senderName: string;
}

export type SendMessagePayload = Pick<Message, "body" | "senderName">;
