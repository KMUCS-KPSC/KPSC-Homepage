export default class officerRes {
  year?: number;
  list: officer[] = [];
}

class officer {
  name?: string; // 이름
  id?: number; // PK
  type?: string; // 직책, 팀
}
