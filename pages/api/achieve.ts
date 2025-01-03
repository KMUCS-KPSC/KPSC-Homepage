import { AchieveList } from "@/src/object";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  response: any;
};

const achieve = new AchieveList();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ response: await achieve.Get() });
}
