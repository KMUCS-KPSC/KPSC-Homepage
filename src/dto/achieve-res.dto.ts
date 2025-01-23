export default class achieveRes {
  id?: number; // primary key

  contest?: string; // 대회명

  team?: string; // 팀명, 개인전

  member?: {
    name: string;
    id: number; // memberRes's PK Value, if not a Member -> id = -1
  }[]; // 팀 구성원 리스트

  comments?: string; // 비고란 ( 등수 등 )
}
