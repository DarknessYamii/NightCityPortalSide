import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { IndexComponent } from './componentes/index/index.component';
import { HeaderComponent } from './componentes/vistas/header/header.component';
import { ArticulosComponent } from './componentes/vistas/articulos/articulos.component';


const routes: Routes = [
  { path: '', component: HeaderComponent, pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'shop', component: ArticulosComponent }
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
