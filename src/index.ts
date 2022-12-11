import axios from "axios";
import * as dotenv from "dotenv";
import { v4 as uuidV4 } from "uuid";
import { USER_AGENT } from "./constants.js";
import { getSession } from "./get-session.js";
import { ConversationPayload } from "./interfaces.js";
import { parseResponse } from "./utils.js";

dotenv.config();

class ChatGPTApi {
  sessionToken: string;
  accessToken: string | null;
  apiBaseUrl: string;
  backendApiBaseUrl: string;
  userAgent: string;

  constructor(sessionToken: string) {
    this.sessionToken = sessionToken;
    this.accessToken = null;
    this.apiBaseUrl = "https://chat.openai.com/api";
    this.backendApiBaseUrl = "https://chat.openai.com/backend-api";
    this.userAgent = USER_AGENT;
  }

  async getAccessToken() {
    if (!this.accessToken) {
      this.accessToken = await getSession(this.sessionToken);
    }

    return this.accessToken;
  }

  async getConversation(message: string) {
    const accessToken = await this.getAccessToken();
    const body: ConversationPayload = {
      action: "next",
      messages: [
        {
          id: uuidV4(),
          role: "user",
          content: {
            content_type: "text",
            parts: [message],
          },
        },
      ],
      model: "text-davinci-002-render",
      parent_message_id: uuidV4(),
    };

    const res = await axios.post(
      `${this.backendApiBaseUrl}/conversation`,
      body,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "user-agent": this.userAgent,
        },
      }
    );
    return res.data;
  }

  async response(message: string) {
    const conversation = await this.getConversation(message);
    const response = parseResponse(conversation);
    return response;
  }
}

export { ChatGPTApi };
