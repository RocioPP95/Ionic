import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saluda',
  templateUrl: './saluda.component.html',
  styleUrls: ['./saluda.component.scss'],
  standalone:false
})
export class SaludaComponent  implements OnInit {

  texto:string="";
  @Input('nombre') nombre:string|undefined;
  @Input('apellido1') apellido1:string|undefined;
  @Input('apellido2') apellido2:string|undefined;

  constructor() { 
   
  }

  ngOnInit() {
     this.texto="Hola "+this.nombre + this.apellido1 + this.apellido2

  }

}
