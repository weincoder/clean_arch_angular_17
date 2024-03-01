import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AlbumApiServiceWithoutDelay } from '../infraestructure/driven-adapter/album-api/album-api-withou-delay.service';
import { AlbumGateway } from '../domain/models/Album/gateway/album-gateway';
import { AlbumApiService } from '../infraestructure/driven-adapter/album-api/album-api.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()),
  { provide: AlbumGateway, useClass: AlbumApiService },]
  // { provide: AlbumGateway, useClass: AlbumApiServiceWithoutDelay },]
};
