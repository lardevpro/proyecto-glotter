import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MapComponent } from './app/components/map/map.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
