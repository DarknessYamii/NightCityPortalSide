import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './componentes/index/index.component';
import { HeaderComponent } from './componentes/vistas/header/header.component';
import { FooterComponent } from './componentes/vistas/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DescargaComponent } from './componentes/descarga/descarga.component';
import { TopicosComponent } from './componentes/topicos/topicos.component';
import { NewsComponent } from './componentes/news/news.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    DescargaComponent,
    TopicosComponent,
    NewsComponent,
    LoginComponent,
    RegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
