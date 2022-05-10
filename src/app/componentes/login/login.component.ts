import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  usuario: Usuario;
  
  constructor(private authService : AuthService, private router: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
   if (this.authService.isAuthenticated()) {
    Swal.fire('Login', `Hola ${this.authService.usuario.nombre} ya estás autenticado!`, 'info');
    this.router.navigate(['/clientes']);
  }
  }


  login(): void{
   console.log(this.usuario);

  
    this.authService.login(this.usuario).subscribe(response =>{
   
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      console.log(response);
      this.router.navigate(['/shop']);
      Swal.fire('Login', `Hola ${usuario.nombre}, has iniciado sesion con exito!`, 'success');
    },err =>{
      if(err.status == 400){
        Swal.fire('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );
  }
  
}
