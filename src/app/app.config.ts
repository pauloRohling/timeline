import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideIcons } from "@ng-icons/core";
import { tablerMessage, tablerDots } from "@ng-icons/tabler-icons";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIcons({ tablerMessage, tablerDots }),
  ],
};
