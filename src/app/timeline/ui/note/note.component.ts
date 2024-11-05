import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { TagComponent } from "../../../shared/ui/tag/tag.component";
import { UserPictureComponent } from "../../../shared/ui/user-picture/user-picture.component";
import { Note } from "../../../shared/data/note/note.entity";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-note",
  standalone: true,
  imports: [TagComponent, UserPictureComponent, NgClass],
  templateUrl: "./note.component.html",
  styleUrl: "./note.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {
  readonly isReply = input<boolean>(false);
  readonly note = input.required<Note>();
}
