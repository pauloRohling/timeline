import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { RandomUtils } from "@utils/random.utils";
import { ColorUtils } from "@utils/color.utils";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-user-picture",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./user-picture.component.html",
  styleUrl: "./user-picture.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPictureComponent {
  readonly name = input.required<string>();

  protected readonly display = computed(() => {
    const name = this.name();
    return (name ?? "")
      .split(" ")
      .slice(0, 2)
      .map((value) => value.at(0))
      .join("")
      .toUpperCase();
  });

  protected readonly color = RandomUtils.color();
  protected readonly isLight = ColorUtils.isLight(this.color);
}
