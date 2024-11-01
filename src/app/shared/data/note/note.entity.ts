export interface Note {
  id: string;
  note: string;
  isPublic: boolean;
  createdBy: string;
  createdAt: Date;
  createdAtFromNow: string;
}
