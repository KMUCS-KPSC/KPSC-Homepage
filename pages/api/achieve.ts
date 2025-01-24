import achieveRes from "@/src/dto/achieve-res.dto";
import { AchieveList } from "@/src/object";
import type { NextApiRequest, NextApiResponse } from "next";

const achieve = new AchieveList();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<achieveRes[]>
) {
  res.status(200).json(await achieve.Get());
}
