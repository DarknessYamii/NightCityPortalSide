import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/componentes/login/usuario.service';
import Swal from 'sweetalert2';
import { Usuario } from './usuario';
import { debounce, debounceTime } from 'rxjs';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  
  form!: FormGroup;

  constructor(public usuarioService: UsuarioService, private router: Router, private formBuilder: FormBuilder) { 
  this.buildForm();
   
  }

  ngOnInit(): void {
  }

   buildForm(){
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern("[A-Z\sa-z]{3,20}")]],
      apellido: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    
    });
    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {

      console.log(value);}
    );
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
     
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  create(event : Event): void{
    event.preventDefault();
    if (this.form.valid) {
  
    this.usuarioService.create(this.form.value)
    .subscribe(usuario => {
      Swal.fire({
        title: 'Usuario creado',
        text: 'El usuario se ha creado correctamente',
        icon: 'success',
        confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/']);
          }
        }
      );
     
      },
      err => {
        if(err == 500){
         Swal.fire('Error', 'El usuario ya existe', 'error');
        }
        console.error('Código del error desde el backend: ', err.status);
        console.error(err.error.errors);
      }
    );
    }else{
      Swal.fire(
        'Error',
        'Debes de rellenar todos los campos',
        'error'
      );
      
    }
}

}
