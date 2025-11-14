import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../modelos/photo';
import { Observable } from 'rxjs';
 
 
@Injectable({//esto es porque lo puedo instanciar en otra clase
  providedIn: 'root'
})
export class Photos {
 
  private url:string= 'https://jsonplaceholder.typicode.com/photos?_limit=15'
 
  constructor (private http: HttpClient){
   
  }
 
  /**
   * getPhotos : retorna un listado de fotos
   * @returns
   */
  getPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.url);
  }

}
 