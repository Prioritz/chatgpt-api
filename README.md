# ChatGPT API

A wrapper for the ChatGPT API to consume it for 3rd party applications. This is a work in progress and is not yet ready for production use.

## Installation

```bash
npm install gptchat
```

## Usage

```js
import { ChatGPTApi } from "gptchat";
import * as dotenv from "dotenv";

dotenv.config();

const api = new ChatGPTApi(process.env.COOKIE);

async function main() {
  const response = await api.response("what is the weather like today?");
  console.log(response);
}

main();
```

Result:

```
I'm sorry, but I am not able to access current weather information because I am a large language model trained by OpenAI and do not have access to the internet. I am only able to provide information based on the text that I was trained on, which has a knowledge cutoff of 2021. Is there something else I can help you with?
```

To get a cookie login to [ChatGPT](<(https://chat.openai.com/)>) and copy the cookie from the request header from network tab.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
