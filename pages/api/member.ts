import memberRes from "@/src/dto/member-res.dto";
import { MemberList } from "@/src/object";
import type { NextApiRequest, NextApiResponse } from "next";

const member = new MemberList();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<memberRes[]>
) {
  res.status(200).json(await member.Get());
}
