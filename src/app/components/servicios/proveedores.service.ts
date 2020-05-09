import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class ProveedorService{

    constructor(private http:HttpClient){
        
    }

    getQuery(query:string){
        const url = `http://localhost:8090/${query}`;
        console.log(url)

        let body = {
            nombre:"",
            descripcion:""
        }
    
        return this.http.post(url,body)
    }



    getProveedores():Observable<any>{
        const url='proveedor';
        return this.getQuery(url);
      }

    }      
export interface Proveedor{
    nombre_comercial: string,
    ruc:string,
    telefono:string,
    id?:number
}

    


