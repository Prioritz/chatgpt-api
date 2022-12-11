import axios from "axios";
import * as dotenv from "dotenv";
import { getSession } from "./get-session.js";

dotenv.config();

class ChatGPTApi {
  accessToken: string | null;
  constructor() {
    this.accessToken = null;
  }

  async getAccessToken() {
    if (!this.accessToken) {
      this.accessToken = await getSession();
    }

    return this.accessToken;
  }
}
