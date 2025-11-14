import { Component } from '@angular/core';
import { CabecerastandaloneComponent } from '../componentes/cabecerastandalone/cabecerastandalone.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  
})
export class HomePage {
  nombre:string="Rocio"
  apellido1:string="Pacheco"
  apellido2:string="Ponce"

  constructor() {}

}
