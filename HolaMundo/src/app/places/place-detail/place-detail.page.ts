import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false
})
export class PlaceDetailPage implements OnInit {
  place: place = { id: '', title: '', imageURL: '', comments: [] };
  // place?:place;

  constructor(private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertControl:AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeID');
      console.log(recipeId);
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place);

    })
  }
  // //elimina la plantilla detalle de un lugar directamente
  //  deletePlace() {
  //   this.placesService.deletePlace(this.place.id)
  //   this.router.navigate(['/places']) //navega a la pagina listado de lugares
  // }


  // elimina la plantilla detalle de un lugar pero pregunta antes cancel o delete
  async deletePlace()
  {
    const element = await this.alertControl.create(
      {
        header: 'are you sure to delete this Place?',
        message: 'Be careful',
        buttons:
        [
          {
            text:'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler: () => {
              this.placesService.deletePlace(this.place.id);
              //redirection to places:
              this.router.navigate(['/places']);
 
            }
          }
        ]
      }
    );
 
    await element.present();
  }


}
