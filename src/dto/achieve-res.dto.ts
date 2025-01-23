export default class achieveRes {
  id?: number; // primary key auto increment
  contest?: string; // 대회명
  team?: string; // 팀명, 개인전
  member?: people[]; // 팀 구성원 리스트
  comments?: string; // 비고란 ( 등수 등 )
}

class people {
  name?: string;
  isMember: boolean = false;
  id?: number;
}
