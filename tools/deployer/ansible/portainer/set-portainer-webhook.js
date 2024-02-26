const fs = require("fs");
const https = require("https");
const path = require("path");

function httpsPost({ body, ...options }) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        method: "POST",
        ...options,
      },
      (res) => {
        const chunks = [];
        res.on("data", (data) => chunks.push(data));
        res.on("end", () => {
          let resBody = Buffer.concat(chunks);
          switch (res.headers["content-type"]) {
            case "application/json":
              resBody = JSON.parse(resBody);
              break;
          }
          resolve(resBody);
        });
      },
    );
    req.on("error", reject);
    if (body) {
      req.write(body);
    }
    req.end();
  });
}

function loginToPortainer({ url, portainer_username, portainer_password }) {
  return httpsPost({
    hostname: url,
    path: "/api/auth",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: portainer_username,
      password: portainer_password,
    }),
  }).then((res) => {
    jwt = res.jwt;

    return jwt;
  });
}

function createWebhook({
  service_id,
  registry_id,
  url,
  portainer_username,
  portainer_password,
  file_name,
}) {
  return loginToPortainer({
    url,
    portainer_username,
    portainer_password,
  }).then((jwt) => {
    return httpsPost({
      hostname: url,
      path: "/api/webhooks",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        ResourceID: service_id,
        EndpointID: 1,
        WebhookType: 1,
        registryID: parseInt(registry_id),
      }),
    }).then((webhook) => {
      const createdFiles = [];

      if (webhook) {
        fs.writeFileSync(
          path.join(__dirname, `./${file_name}.json`),
          JSON.stringify(webhook),
        );

        createdFiles.push(path.join(__dirname, `./${file_name}.json`));

        if (webhook.Token) {
          fs.writeFileSync(
            path.join(__dirname, `./${file_name}_token`),
            webhook.Token,
          );

          createdFiles.push(path.join(__dirname, `./${file_name}_token`));
        }
      }

      return createdFiles;
    });
  });
}

var args = process.argv.slice(2);

const service_id = args[0];

// process.stdout.write(`🚀 ~ service_id: ${service_id}\n`);

// console.log(`🚀 ~ service_id:`, service_id);

const registry_id = args[1];
// console.log(`🚀 ~ registry_id:`, registry_id);
const url = args[2];
// console.log(`🚀 ~ url:`, url);
const portainer_username = args[3];
// console.log(`🚀 ~ portainer_username:`, portainer_username);
const portainer_password = args[4];

const file_name = args[5];
// console.log(`🚀 ~ portainer_password:`, portainer_password);

createWebhook({
  service_id,
  registry_id,
  url,
  portainer_username,
  portainer_password,
  file_name,
}).then((res) => {
  process.stdout.write(JSON.stringify(res));
  // console.log(res);
});
