import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-tarjeta',
  templateUrl: './proveedor-tarjeta.component.html',
  styles: []
})
export class ProveedorTarjetaComponent implements OnInit {

  @Input() proveedor:any={};
  @Input() indice:number;

 

  constructor(private router:Router) {
   
   }

  ngOnInit(): void {
  }

  verLibro(){

    console.log(this.indice);
    

    //this.router.navigate(['/estudiante',this.indice]);
  }

}
