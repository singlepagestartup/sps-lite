import { OpenAIApi, Configuration } from "openai";
import fs from "fs";

class OpenAI {
  apiKey: string = process.env.OPENAI_API_KEY || "";
  openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY || "",
    });

    this.openai = new OpenAIApi(configuration);
  }

  async chat(messages) {
    try {
      const response = await this.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages,
      });

      if (!response.data.choices[0].message) {
        throw new Error("No message in response");
      }

      return response.data.choices[0].message.content;
    } catch (error) {
      return error.message;
    }
  }

  async transcript(pathToFile) {
    try {
      const recorderFile = fs.createReadStream(pathToFile);
      // const response = await this.openai.createTranscription(
      //   recorderFile,
      //   "whisper-1",
      // );

      // return response.data.text;
      return "Voice transcript if turned off";
    } catch (error) {
      console.log("🚀 ~ transcript ~ error:", error.message);
    }
  }
}

export default OpenAI;
