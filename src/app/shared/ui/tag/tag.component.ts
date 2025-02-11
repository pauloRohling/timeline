import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-tag",
  imports: [],
  templateUrl: "./tag.component.html",
  styleUrl: "./tag.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  readonly label = input.required<string | number>();
}
