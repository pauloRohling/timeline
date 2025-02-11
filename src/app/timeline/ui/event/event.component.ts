import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Event } from "../../../shared/data/event/event.entity";
import { NgIcon } from "@ng-icons/core";

@Component({
  selector: "app-event",
  imports: [NgIcon],
  templateUrl: "./event.component.html",
  styleUrl: "./event.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent {
  readonly event = input.required<Event>();
}
