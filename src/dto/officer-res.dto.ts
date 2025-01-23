export default class officerRes {
  year?: number; // 년도

  team?: string; // 부서명

  list?: {
    name?: string; // 이름
    id?: number; // memberRes PK Value
  }[]; // 부서 구성원
}
