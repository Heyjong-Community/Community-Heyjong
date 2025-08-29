export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  fullname: string;
  nickname: string;
  email: string;
  username: string;
  role: 'SuperAdmin' | 'Admin' | 'Staff' | 'Member';
}
