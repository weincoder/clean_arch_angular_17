import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/config/app.config';
import { MainComponent } from './app/UI/main/main.component';

bootstrapApplication(MainComponent, appConfig)
  .catch((err) => console.error(err));
