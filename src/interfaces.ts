import { Role } from "./types";

export interface Content {
  content_type: string;
  parts: string[];
}

export interface Message {
  content: Content;
  id: string;
  role: Role;
}

export interface ConversationPayload {
  action: string;
  conversation_id?: string;
  messages: Message[];
  model: string;
  parent_message_id: string;
}
