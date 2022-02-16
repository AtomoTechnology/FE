export interface Roles {
  status: boolean;
  results: number;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
  description: string;
  state: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}
