import { SocialConnect } from "react-socialconnect";

export async function POST(req: Request) {
  return await SocialConnect({
    req,
    option: {
      dekPrivateKey: process.env.DEK_PRIVATE_KEY as string,
      issuerPrivateKey: process.env.ISSUER_PRIVATE_KEY as string,
    },
  });
}
