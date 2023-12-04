const { Octokit } = require("octokit");

async function deleteSecret({
  token,
  ownerWithRepository,
  secretName,
  secretScope = "actions",
}) {
  const octokit = new Octokit({
    auth: token,
  });

  const owner = ownerWithRepository.split("/")[0];
  const repo = ownerWithRepository.split("/")[1];

  const secret = await octokit.request(
    "DELETE /repos/{owner}/{repo}/{secretScope}/secrets/{secretName}",
    {
      owner,
      repo,
      secretName,
      secretScope,
    },
  );

  return secret;
}

(async () => {
  try {
    var args = process.argv.slice(2);
    const token = args[0];
    const ownerWithRepository = args[1];
    const secretName = args[2];
    const secretScope = args[3];

    await deleteSecret({
      token,
      ownerWithRepository,
      secretName,
      secretScope,
    });
  } catch (err) {
    if (err.status !== 404) {
      throw err;
    }
  }
})();
