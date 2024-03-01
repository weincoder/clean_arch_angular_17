import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/Album/album';
import {AlbumGateway} from '../models/Album/gateway/album-gateway';

@Injectable({
  providedIn: 'root'
})

export class GetAlbumUseCases {
  constructor( private _albumGateWay: AlbumGateway) {}
  getAlbumById (id: String) : Observable <Album> {
    return this._albumGateWay.getByID(id);
  }
  getAllAlbum () : Observable <Array<Album>> {
    return this._albumGateWay.getAll();
  }
}