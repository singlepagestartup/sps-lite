import aiplatform from "@google-cloud/aiplatform";
const { PredictionServiceClient } = aiplatform.v1;
import { toValue } from "@google-cloud/aiplatform/build/src/helpers";
import path from "path";
import fs from "fs/promises";

class GoogleCloud {
  config: any;

  constructor() {
    //
  }

  async setConfig() {
    const configs: any = await strapi
      .plugin("plugin.sps-crm.configuration")
      .findMany({
        populate: {
          configs: {
            populate: "*",
          },
        },
      });

    const googleDriveConfig = configs.configs.find(
      (c) => c.provider === "google",
    );

    this.config = googleDriveConfig;
    await fs.writeFile(
      path.join(__dirname, "../googlekey.json"),
      JSON.stringify(googleDriveConfig.config),
    );
  }

  async callPredict() {
    const project = "singlepagestartup";
    const publisher = "google";
    const model = "text-bison@001";

    process.env.GOOGLE_APPLICATION_CREDENTIALS = path.join(
      __dirname,
      "../googlekey.json",
    );

    const clientOptions = {
      apiEndpoint: "us-central1-aiplatform.googleapis.com",
    };

    const predictionServiceClient = new PredictionServiceClient(clientOptions);

    // Configure the parent resource
    const endpoint = `projects/${project}/locations/us-central1/publishers/google/models/${model}`;

    const prompt = {
      prompt:
        "Give me ten interview questions for the role of program manager.",
    };
    const instanceValue = toValue(prompt);
    const instances = [instanceValue];

    const parameter = {
      temperature: 0.2,
      maxOutputTokens: 500,
      topP: 0.95,
      topK: 40,
    };
    const parameters = toValue(parameter);

    const request = {
      endpoint,
      instances,
      parameters,
    };

    // Predict request
    const response = await predictionServiceClient.predict(request);
    console.log("Get text prompt response");
    console.log(response);
  }
}

export default GoogleCloud;
