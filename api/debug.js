export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(
    JSON.stringify(
      {
        keys: Object.keys(process.env).sort(),
        node_version: process.version,
        env_mode: process.env.NODE_ENV,
        pat_1_exists: !!process.env.PAT_1,
        github_token_exists: !!process.env.GITHUB_TOKEN,
      },
      null,
      2
    )
  );
};
