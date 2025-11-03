import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
  standalone: false
})
export class PlaceAddPage implements OnInit {
  titulo: string = "Añadir Lugar"

  constructor(private placeServices: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  //Guarda un nuervo lugar
  saveNewPlace(tittle: any, image: any) {
    this.placeServices.addPlace(tittle.value, image.value)
    //redirection to place
    this.router.navigate(['/places'])
  }

}
