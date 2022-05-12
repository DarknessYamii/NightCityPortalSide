import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/componentes/login/usuario.service';
import Swal from 'sweetalert2';
import { Usuario } from './usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  
  constructor(public usuarioService: UsuarioService, private router: Router) { 
   
  }

  ngOnInit(): void {
  }

  create(): void{
    this.usuarioService.create(this.usuario)
    .subscribe(usuario => {
        this.router.navigate(['/login'])
      },
      err => {
        console.error('Código del error desde el backend: ', err.status);
        console.error(err.error.errors);
      }
    );
  }

}
