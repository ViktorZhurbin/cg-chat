import { Message } from "../MessagesList";

export type MessagesListItemProps = Pick<Message, "body" | "senderName">;
