import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { TagComponent } from "../../../shared/ui/tag/tag.component";
import { UserPictureComponent } from "../../../shared/ui/user-picture/user-picture.component";
import { Note } from "../../../shared/data/note/note.entity";
import { NgClass } from "@angular/common";
import { ButtonComponent } from "../../../shared/ui/button/button.component";

@Component({
  selector: "app-note",
  imports: [TagComponent, UserPictureComponent, NgClass, ButtonComponent],
  templateUrl: "./note.component.html",
  styleUrl: "./note.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {
  readonly note = input.required<Note>();
}
