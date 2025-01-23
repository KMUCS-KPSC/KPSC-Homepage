export default class memberRes {
  id?: number; // primary key

  name?: string; // 이름

  department?: string; // 학과, 학부

  boj?: string; // 백준 닉네임

  github?: string; // 백준 닉네임

  email?: string; // 이메일 주소

  isActive?: boolean; // 활동 부원 여부 True/False

  year?: number[]; // 활동 년도 리스트

  summary?: string; // 하고싶은 말
}
