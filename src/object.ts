import { Achieve } from "./entities/achieve";
import { Member } from "./entities/member";
import { Query } from "./notion";

let MemberArray: Array<Member> = [];
let AchieveArray: Array<Achieve> = [];

class MemberList {
  constructor() {
    this.Update();
  }

  Update = async () => {
    // caching logic if expression. TBD
    if (MemberArray.length == 0) {
      const query = await Query("Member");
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

class AchieveList {
  constructor() {
    this.Update();
  }

  Update = async () => {
    // caching logic if expression. TBD
    if (AchieveArray.length == 0) {
      const query = await Query("Achievements");
      AchieveArray = query["results"].map(
        (elem: any) => new Achieve(elem["properties"])
      );
    }
  };

  Get = async () => {
    await this.Update();
    return AchieveArray.map((elem) => elem.Get());
  };
}

export { MemberList, AchieveList };
