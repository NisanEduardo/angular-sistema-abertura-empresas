import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient, withFetch } from "@angular/common/http";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";

import { provideStore } from "@ngrx/store";
import { companiesReducer } from "./store/companies/companies.reducer";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(),
		provideHttpClient(withFetch()),
		provideStore({ companiesStore: companiesReducer }),
	],
};
