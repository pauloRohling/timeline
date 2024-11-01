import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Config, names, uniqueNamesGenerator } from "unique-names-generator";
import { LoremIpsum } from "lorem-ipsum";
import { UserPictureComponent } from "./shared/ui/user-picture/user-picture.component";
import { DateUtils } from "@utils/date.utils";
import { Note } from "./shared/data/note/note.entity";
import { TagComponent } from "./shared/ui/tag/tag.component";
import { NoteComponent } from "./timeline/ui/note/note.component";
import { RandomUtils } from "@utils/random.utils";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, UserPictureComponent, TagComponent, NoteComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly randomConfig: Config = {
    dictionaries: [names, names],
    separator: " ",
  };

  private readonly randomLoremIpsum = new LoremIpsum({
    sentencesPerParagraph: { max: 4, min: 2 },
    wordsPerSentence: { max: 16, min: 4 },
  });

  private readonly defaultDate = Date.now() - 1000 * 60 * 47;
  private readonly interval = 1000 * 60 * 60 * 15;

  protected readonly notes: Note[] = new Array(100).fill(0).map((_, index) => {
    const createdAt = new Date(this.defaultDate - this.interval * index);
    return {
      id: crypto.randomUUID(),
      note: this.randomLoremIpsum.generateParagraphs(1),
      isPublic: RandomUtils.boolean(),
      createdBy: uniqueNamesGenerator(this.randomConfig),
      createdAt,
      createdAtFromNow: DateUtils.fromNow(createdAt),
    };
  });
}
