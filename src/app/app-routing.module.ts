import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { IndexComponent } from './componentes/index/index.component';
import { HeaderComponent } from './componentes/vistas/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/login/registro.component';
import { DescargaComponent } from './componentes/descarga/descarga.component';
import { NewsComponent } from './componentes/news/news.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent, pathMatch: 'full' },
  { path: 'shop', component: TiendaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'descarga', component: DescargaComponent},
  { path: 'news', component: NewsComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
