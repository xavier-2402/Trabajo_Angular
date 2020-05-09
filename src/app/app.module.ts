import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { APPROUTING } from './app.routes';
import { LoadingComponent } from './components/utils/loading.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ProveedorTarjetaComponent } from './components/proveedor-tarjeta/proveedor-tarjeta.component';
import { ProveedorService } from './components/servicios/proveedores.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoadingComponent,
    ProveedoresComponent,
    ProveedorComponent,
    ProveedorTarjetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APPROUTING
  ],
  providers: [
    ProveedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
