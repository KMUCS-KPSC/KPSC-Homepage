import { QueryMember } from "@/src/notion";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: JSON;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const val = await QueryMember();
  res.status(200).json({ message: val });
}
