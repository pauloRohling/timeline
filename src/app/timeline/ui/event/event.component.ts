import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Event } from "../../../shared/data/event/event.entity";
import { UserPictureComponent } from "../../../shared/ui/user-picture/user-picture.component";
import { ButtonComponent } from "../../../shared/ui/button/button.component";
import { TagComponent } from "../../../shared/ui/tag/tag.component";
import { NgIcon } from "@ng-icons/core";

@Component({
  selector: "app-event",
  standalone: true,
  imports: [UserPictureComponent, ButtonComponent, TagComponent, NgIcon],
  templateUrl: "./event.component.html",
  styleUrl: "./event.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent {
  readonly event = input.required<Event>();
}
