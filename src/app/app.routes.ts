import { RouterModule, Routes } from '@angular/router';

import {HeaderComponent} from '../app/components/header/header.component';
import {BodyComponent} from '../app/components/body/body.component';
import { ProveedoresComponent } from '../app/components/proveedores/proveedores.component';
import { ProveedorComponent } from '../app/components/proveedor/proveedor.component';


const ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: 'proveedor/:id', component: ProveedorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);