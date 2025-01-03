import { MemberList } from "@/src/object";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  response: any;
};

const member = new MemberList();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ response: await member.Get() });
}
