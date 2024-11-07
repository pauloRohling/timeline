import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Icon } from "../../data/icon/icons";
import { NgIcon } from "@ng-icons/core";

@Component({
  selector: "button",
  standalone: true,
  imports: [NgIcon],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly icon = input<Icon>();
  readonly label = input("");
  readonly rightIcon = input<Icon>();
}
