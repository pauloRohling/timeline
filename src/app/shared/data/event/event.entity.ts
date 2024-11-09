import { Icon } from "../icon/icons";

export interface Event {
  id: string;
  icon: Icon;
  createdBy: string;
  createdAt: Date;
  createdAtFromNow: string;
}
