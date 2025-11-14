import { Component } from '@angular/core';
import { Photos } from './photos';
import { Photo } from '../modelos/photo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  photos: Photo[] = [];
  title: string = "Listado de imagenes"

  constructor(private photosService: Photos) { }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(data => {
      console.log(data)
      this.photos = data
    })
  }
}
