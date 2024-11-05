export interface Note {
  id: string;
  note: string;
  isPublic: boolean;
  replies: Note[];
  createdBy: string;
  createdAt: Date;
  createdAtFromNow: string;
}
