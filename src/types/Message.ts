export interface Message {
    id: number;
    body: string;
    senderName: string;
}

export type CreateMessagePayload = Pick<Message, "body" | "senderName">;
