import { parseBool, parseNum, parseStr } from "../notion";

export class Member {
  name?: String = "";
  active?: boolean = true;
  num?: number = 0;
  department?: String = "";
  phone?: String = "";
  boj?: String = "";
  email?: String = "";

  constructor(prop: any) {
    this.name = parseStr(prop["이름"]);
    this.active = parseBool(prop["Active"]);
    this.num = parseNum(prop["학번"]);
    this.department = parseStr(prop["학과"]);
    this.phone = parseStr(prop["전화번호"]);
    this.boj = parseStr(prop["백준 핸들"]);
    this.email = parseStr(prop["이메일"]);
    return this;
  }

  Get() {
    return {
      name: this.name,
      department: this.department,
      boj: this.boj,
      email: this.email,
    };
  }
}
