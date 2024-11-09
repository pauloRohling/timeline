import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Config, names, uniqueNamesGenerator } from "unique-names-generator";
import { LoremIpsum } from "lorem-ipsum";
import { UserPictureComponent } from "./shared/ui/user-picture/user-picture.component";
import { DateUtils } from "@utils/date.utils";
import { Note } from "./shared/data/note/note.entity";
import { Event } from "./shared/data/event/event.entity";
import { TagComponent } from "./shared/ui/tag/tag.component";
import { NoteComponent } from "./timeline/ui/note/note.component";
import { RandomUtils } from "@utils/random.utils";
import { EventComponent } from "./timeline/ui/event/event.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, UserPictureComponent, TagComponent, NoteComponent, EventComponent],
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

  protected readonly timelineItems: { id: string; note?: Note; event?: Event }[] = new Array(27)
    .fill(0)
    .map((_, index) => {
      if (index !== 0 && RandomUtils.boolean()) {
        return { id: RandomUtils.id(), event: this.generateRandomEvent(index) };
      }
      return { id: RandomUtils.id(), note: this.generateRandomNoteWithReply(index) };
    });

  private generateRandomEvent(index: number): Event {
    const createdAt = new Date(this.defaultDate - this.interval * index);
    return {
      id: RandomUtils.id(),
      icon: "tablerCheck",
      createdBy: uniqueNamesGenerator(this.randomConfig),
      createdAt,
      createdAtFromNow: DateUtils.fromNow(createdAt),
    };
  }

  private generateRandomNote(index: number): Note {
    const createdAt = new Date(this.defaultDate - this.interval * index);
    return {
      id: RandomUtils.id(),
      note: this.randomLoremIpsum.generateParagraphs(1),
      isPublic: RandomUtils.boolean(),
      replies: [],
      createdBy: uniqueNamesGenerator(this.randomConfig),
      createdAt,
      createdAtFromNow: DateUtils.fromNow(createdAt),
    };
  }

  private generateRandomNoteWithReply(index: number): Note {
    const createdAt = new Date(this.defaultDate - this.interval * index);
    const replies = new Array(RandomUtils.int(3))
      .fill(0)
      .map((_, index) => this.generateRandomNote(index));

    return {
      id: RandomUtils.id(),
      note: this.randomLoremIpsum.generateParagraphs(1),
      isPublic: RandomUtils.boolean(),
      replies,
      createdBy: uniqueNamesGenerator(this.randomConfig),
      createdAt,
      createdAtFromNow: DateUtils.fromNow(createdAt),
    };
  }

  protected readonly event = event;
}
