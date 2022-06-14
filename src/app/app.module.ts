import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './componentes/index/index.component';
import { HeaderComponent } from './componentes/vistas/header/header.component';
import { FooterComponent } from './componentes/vistas/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DescargaComponent } from './componentes/descarga/descarga.component';
import { TopicosComponent } from './componentes/topicos/topicos.component';
import { NewsComponent } from './componentes/news/news.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './componentes/login/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './componentes/login/usuario.service';
import { FieldErrorDisplayComponent } from './componentes/login/field-error-display/field-error-display.component';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
    FieldErrorDisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
    
 
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
