import { Icon } from "../icon/icon.type";

export interface Event {
  id: string;
  icon: Icon;
  createdBy: string;
  createdAt: Date;
  createdAtFromNow: string;
}
