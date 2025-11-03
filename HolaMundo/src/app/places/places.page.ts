import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { place } from './place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  standalone: false
})
export class PlacesPage implements OnInit {



  //titulo de la página
  titulo: string = "Lugares del mundo";
  places: place[] = [


  ]

  constructor(private placeService: PlacesService ,
     private router:Router) { 
    
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.places = this.placeService.getPlaces();

  }
  newPlace(){
    this.router.navigate(['/places/place-add'])
  }

  //metodo redireccion to Page Home:
  goToHome(){
    this.router.navigate(['home'])
  }

}
