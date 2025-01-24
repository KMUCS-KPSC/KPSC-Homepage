import person from "./person.dto";

export default class officerRes {
  year?: number; // 년도

  team?: string; // 부서명

  list?: person[]; // 부서 구성원
}
