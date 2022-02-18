export interface Statuses {
  status: boolean;
  results: number;
  statuses: Status[];
}

export interface Status {
  id: number;
  name: string;
  state: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}
