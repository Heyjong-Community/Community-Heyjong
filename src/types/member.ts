export interface Member {
  id: string;
  fullname: string;
  nickname: string;
  gender: GenderMember;
  university: string;
  faculty: string;
  department: string;
  status: string;
}

type GenderMember = 'Male' | 'Female';

export type FormMember = Omit<Member, 'id'>;
