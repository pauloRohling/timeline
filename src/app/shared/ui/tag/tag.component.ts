import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-tag",
  standalone: true,
  imports: [],
  templateUrl: "./tag.component.html",
  styleUrl: "./tag.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  readonly label = input.required<string | number>();
}
