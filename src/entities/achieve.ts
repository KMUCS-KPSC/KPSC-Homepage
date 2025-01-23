import achieveRes from "../dto/achieve-res.dto";
import { parseList, parseNum, parseStr } from "../notion";

export class Achieve extends achieveRes {
  constructor(prop: any) {
    super();
    this.id = parseNum(prop["ID"]);
    this.contest = parseStr(prop["대회명"]);
    this.team = parseStr(prop["팀명"]);
    this.comments = parseStr(prop["비고"]);

    this.member = parseList(prop["년도"])?.map((elem: string) => {
      const [name, id] = elem.split(",");
      const num = Number(id);

      if (Number.isNaN(num)) return { name, id: -1 };
      else return { name, id: num };
    });
    return this;
  }

  Get() {
    return this;
  }
}
