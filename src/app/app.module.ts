import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticulosComponent } from './componentes/vistas/articulos/articulos.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './componentes/index/index.component';
import { HeaderComponent } from './componentes/vistas/header/header.component';
import { FooterComponent } from './componentes/vistas/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    TiendaComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
