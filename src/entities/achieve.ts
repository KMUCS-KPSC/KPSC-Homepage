import { parseStr } from "../notion";

export class Achieve {
  contest?: String = "";
  team?: String = "";
  member?: String = "";
  comments?: String = "";

  constructor(prop: any) {
    this.contest = parseStr(prop["대회명"]);
    this.team = parseStr(prop["팀명"]);
    this.member = parseStr(prop["팀 멤버"]);
    this.comments = parseStr(prop["비고"]);
    return this;
  }

  Get() {
    return this;
  }
}
