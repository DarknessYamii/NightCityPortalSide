import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  usuario: Usuario;
  
  constructor(private loginService : LoginService, private router: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }


  login(): void{
    console.log(this.usuario);

    this.loginService.login(this.usuario).subscribe(response =>{
      console.log(response);
      this.router.navigate(['/shop']);
    });
  }
}
