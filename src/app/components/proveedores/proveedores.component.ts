import { Component, OnInit } from '@angular/core';
import { ProveedorService,Proveedor } from '../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: []
})
export class ProveedoresComponent implements OnInit {
  
  proveedores: any = {}

  constructor(private proveedorService:ProveedorService){  
      
  }

  getProveedores(){

    this.proveedorService.getProveedores().subscribe((data:Proveedor)=>{
      console.log(data);
      this.proveedores =data;

          })
  }

  ngOnInit(): void {

    this.getProveedores()

  }



}
