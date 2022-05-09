import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
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
   this.usuario = new Usuario();
  }


  login(): void{
   console.log(this.usuario);

  
    this.authService.login(this.usuario).subscribe(response =>{
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      console.log(response);
      this.router.navigate(['/shop']);
    });
  }
  
}
