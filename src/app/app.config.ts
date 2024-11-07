import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideIcons, provideNgIconsConfig } from "@ng-icons/core";
import { TablerIcons } from "./shared/data/icon/icons";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIcons(TablerIcons),
    provideNgIconsConfig({ strokeWidth: 1.5 }),
  ],
};
