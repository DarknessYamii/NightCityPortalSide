import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../componentes/login/auth.service';
import { Usuario } from '../componentes/login/usuario';

@Injectable()
export class UsuarioService {

  private urlEndPoint: string = 'http://localhost:8080/api/users';

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

  private isNoAutorizado(e: any): boolean {
    if (e.status == 401) {

      if (this.authService.isAuthenticated()) {
        this.authService.logout();
      }
      this.router.navigate(['/login']);
      return true;
    }

    if (e.status == 403) {
      Swal.fire('Acceso denegado', `Hola ${this.authService.usuario.nombre} no tienes acceso a este recurso!`, 'warning');
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }


  getUsers(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      tap((response: any) => {
    
        (response.content as Usuario[]).forEach(usuario => console.log(usuario.nombre));
      }),
      map((response: any) => {
        (response.content as Usuario[]).map(usuario => {
          usuario.nombre = usuario.nombre.toUpperCase();
          return usuario;
        });
        return response;
      }),
      tap(response => {
        (response.content as Usuario[]).forEach(usuario => console.log(usuario.nombre));
      }));
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post(this.urlEndPoint, usuario, { headers: this.agregarAuthorizationHeader() })
      .pipe(
        map((response: any) => response.Usuario as Usuario),
        catchError(e => {
          if (this.isNoAutorizado(e)) {
            return throwError(e);
          }

          if (e.status == 400) {
            return throwError(e);
          }

          console.error(e.error.mensaje);
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
  }

  getUsuario(id:any): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`,  { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  update(usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${usuario.id}`, usuario,  { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete(id: any): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`,  { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }


}