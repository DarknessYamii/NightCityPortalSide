import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  
  }
  logout(): void {
    let username = this.authService.usuario.nombre;
    this.authService.logout();
    Swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/login']);
  }
}
