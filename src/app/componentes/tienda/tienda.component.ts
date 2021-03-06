import { Component, OnInit } from '@angular/core';
import articulos from "src/assets/api/articulos.json";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  articulos: any = articulos;
  constructor() { }

  ngOnInit(): void {
  }

  popup(){
    Swal.fire('Comprar', `Hola, has comprado el producto correctamente!`, 'success')
  }

}
