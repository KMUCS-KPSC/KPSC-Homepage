import achieveRes from "../dto/achieve-res.dto";
import memberRes from "../dto/member-res.dto";
import { parseBool, parseNum, parseStr, parseList } from "../notion";

export class Member extends memberRes {
  constructor(prop: any) {
    super();
    this.id = parseNum(prop["ID"]);
    this.name = parseStr(prop["이름"]);
    this.department = parseStr(prop["학과"]);
    this.boj = parseStr(prop["백준 핸들"]);
    this.github = parseStr(prop["깃허브 핸들"]);
    this.email = parseStr(prop["이메일"]);
    this.isActive = parseBool(prop["Active"]);
    this.year = parseList(prop["년도"])?.map((elem: string) => parseInt(elem));
    this.summary = parseStr(prop["하고싶은 말"]);
    return this;
  }

  Get() {
    const res: achieveRes = this;
    return res;
  }
}
