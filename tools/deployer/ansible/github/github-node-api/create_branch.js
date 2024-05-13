const { Octokit } = require("octokit");
const sodium = require("libsodium-wrappers");

async function createBranch({ token, ownerWithRepository, branchName }) {
  const owner = ownerWithRepository.split("/")[0];
  const repo = ownerWithRepository.split("/")[1];

  const octokit = new Octokit({
    auth: token,
  });

  const mainRef = await octokit.request(
    "GET /repos/{owner}/{repo}/git/ref/{ref}",
    {
      owner,
      repo,
      ref: "heads/main",
    },
  );

  const branch = await octokit.request("POST /repos/{owner}/{repo}/git/refs", {
    owner,
    repo,
    ref: `refs/heads/${branchName}`,
    sha: mainRef.data.object.sha,
  });

  return branch;
}

(async () => {
  try {
    var args = process.argv.slice(2);
    const token = args[0];
    const ownerWithRepository = args[1];
    const branchName = args[2];

    await createBranch({
      token,
      ownerWithRepository,
      branchName,
    });
  } catch (error) {
    if (error.status !== 422) {
      throw error;
    }
  }
})();
