import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  private urlEndPointRegister: string = 'http://localhost:8080/api/users/register';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router,
    private authService: AuthService) { }

  private agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  private isNoAutorizado(e:any): boolean {
    if (e.status == 401) {

      if (this.authService.isAuthenticated()) {
        this.authService.logout();
      }
      this.router.navigate(['/login']);
      return true;
    }

    if (e.status == 403) {
      Swal.fire('Acceso denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso!`, 'warning');
      this.router.navigate(['/registro']);
      return true;
    }
    return false;
  }

  create(usuario: Usuario): Observable<Usuario> {
    console.log(usuario)
    return this.http.post(this.urlEndPointRegister, usuario, { headers: this.httpHeaders }).pipe(
      map( (response: any) => response.usuario as Usuario,
      Swal.fire({
        title: '<strong>Registro exitoso</strong>',
        icon: 'success',
        html:
          `Bienvenido ${usuario.username}, has sido registrado exitosamente`,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Perfecto!',
        preConfirm: () => {
          this.router.navigate(['/login'])
          },
      })
      ),
      
    );
    
  }

}