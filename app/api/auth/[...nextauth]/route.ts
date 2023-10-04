import { SCNextAuth, SCProviders } from "@/react-socialconnect/src/index";
import { NextApiRequest, NextApiResponse } from "next";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await SCNextAuth(req, res, {
    providerType: SCProviders.Github,
    providers: {
      githubId: process.env.GITHUB_ID as string,
      githubSecret: process.env.GITHUB_SECRET as string,
    },
  });
}
