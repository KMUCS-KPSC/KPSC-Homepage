import { parseProp, QueryMember } from "./notion";

type MemberData = {
  name: String;
  active: boolean;
  num: number;
  department: String;
  phone: String;
  boj: String;
  email: String;
};

class Member {
  data: Array<MemberData> = [];

  constructor() {
    this.Update();
  }

  Update = async () => {
    const query = await QueryMember();

    query["results"].forEach((elem: any) => {
      const data = elem["properties"];
      const ret: MemberData = {
        name: parseProp(data["이름"]),
        active: parseProp(data["Active"]),
        num: parseProp(data["학번"]),
        department: parseProp(data["학과"]),
        phone: parseProp(data["전화번호"]),
        boj: parseProp(data["백준 핸들"]),
        email: parseProp(data["이메일"]),
      };
      this.data.push(ret);
    });
  };

  Get = async () => {
    await this.Update();
    return this.data;
  };
}

export { Member };
