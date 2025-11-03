import { Injectable } from '@angular/core';
import { place } from './place.model'



@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // lista de lugares del mundo:
  private places: place[] = [
    {
      id: '1',
      title: 'Torre Eiffel',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs82eBcP9ttK5yoscHgwD1PsImOi_uRI6szQ&usqp=CAU',
      comments: ['Maravillosa torre, preciosa', 'una belleza, impresionante altura']

    },
    {
      id: '2',
      title: 'Estatua de la libertad',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCan76xKnQStQwYTKyi8EUl0vXpuiefc-6Ow&usqp=CAU',
      comments: ['Increibles las vistas desde la bahía', 'Las vistas desde arriba son una pasada']
    },
    {
      id: '3',
      title: 'Estatua de la libertad comentarios vacios',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCan76xKnQStQwYTKyi8EUl0vXpuiefc-6Ow&usqp=CAU',
      comments: []
    }

  ]


  constructor() { }

  /**
   * getPlaces: Devuelve un listado completo de lugares del mundo.
   * Parámetros de entrada: NA
   * @returns 
   * Array de objetos lugares del mundo.
   */
  getPlaces() {
    return [...this.places]
  }

  /**
   * getPlace: Devuelve un objeto del listado de lugares del mundo
   * @param placeID : Identificador del objeto a devolver
   * @returns 
   * Un objeto de lugares del mundo
   */
  getPlace(placeID: string | null) {
    return {
      ...this.places.find(place => {
        return place.id === placeID
      })
    }
  }

  /**
   * addPlace: Añade un objeto nuevo al listado de lugares del mundo
   * @param title : Título del objeto nuevo añadido
   * @param imageURL : Imagen nueva del objeto nuevo añadido
   */
  addPlace(title: string, imageURL: string) {
    this.places.push({
      title: title,
      imageURL: imageURL,
      comments: [],
      id: (this.places.length + 1).toString()
    })
  }


  /**
   * deletePlace: eliminar un objeto de listado de lugares del mundo
   * @param placeID : identifcaidro del objeto a eliminar
   */
  deletePlace(placeID: string | undefined) {
    this.places = this.places.filter(place => {
      return place.id != placeID
    })

  }
}
