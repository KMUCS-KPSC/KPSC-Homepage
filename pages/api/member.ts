import { Member } from "@/src/object";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  response: any;
};

const member = new Member();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const val = await member.Get();
  res.status(200).json({ response: val });
}
