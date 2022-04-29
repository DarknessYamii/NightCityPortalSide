import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: Usuario;
  constructor() { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }


  login(): void{
    console.log(this.usuario);
  }
}
