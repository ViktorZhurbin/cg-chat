export interface Message {
    id: number;
    body: string;
    senderName: string;
}

export interface MessageData {
    messages: Message[];
}

export interface MessagesListProps {
    messages: MessageData["messages"];
}
