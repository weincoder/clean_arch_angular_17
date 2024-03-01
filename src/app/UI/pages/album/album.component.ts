import { Component, OnInit, inject } from '@angular/core';
import { GetAlbumUseCases } from '../../../domain/usecase/get-album-use-case';
import { Album } from '../../../domain/models/Album/album';
import { Observable } from 'rxjs';
import { CircularProgressComponent } from '../../ds/atoms/circular-progress/circular-progress.component';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CircularProgressComponent],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent implements OnInit {
  constructor(private _getAlbumUseCase: GetAlbumUseCases) { }
  response$: Observable<Album> | undefined;
  datos?: Album;
  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getAlbumById('20');
    this.response$.subscribe(
      (data: Album) => {
        this.datos = data;
      }
    );

  }
}
