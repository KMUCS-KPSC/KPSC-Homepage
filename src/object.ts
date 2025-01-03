import { parseProp, QueryMember } from "./notion";

let MemberArray: Array<Member> = [];

class Member {
  name: String = "";
  active: boolean = true;
  num: number = 0;
  department: String = "";
  phone: String = "";
  boj: String = "";
  email: String = "";

  constructor(prop: any) {
    this.name = parseProp(prop["이름"]);
    this.active = parseProp(prop["Active"]);
    this.num = parseProp(prop["학번"]);
    this.department = parseProp(prop["학과"]);
    this.phone = parseProp(prop["전화번호"]);
    this.boj = parseProp(prop["백준 핸들"]);
    this.email = parseProp(prop["이메일"]);

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

class MemberList {
  constructor() {
    this.Update();
  }

  Update = async () => {
    // caching logic if expression. TBD
    if (MemberArray.length == 0) {
      const query = await QueryMember();
      MemberArray = query["results"].map(
        (elem: any) => new Member(elem["properties"])
      );
    }
  };

  Get = async () => {
    await this.Update();
    return MemberArray.map((elem) => elem.Get());
  };
}

export { Member, MemberList };
