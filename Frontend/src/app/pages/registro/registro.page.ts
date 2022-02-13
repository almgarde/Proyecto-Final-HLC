import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuarios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public usuario = {
    nombre: '',
    apellidos: '',
    email: '',
    pwd: '',
  };

  constructor(private formBuilder: FormBuilder, private _usuarioService: UsuarioService, private _router: Router) { }

  public registerForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  get nombre() {
    return this.registerForm.get('nombre')
  }
  get apellidos() {
    return this.registerForm.get('apellidos')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get pwd() {
    return this.registerForm.get('pwd')
  }
  get pwd2() {
    return this.registerForm.get('pwd2')
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
      pwd2: ['', [Validators.required, Validators.minLength(8)]]
    } // , pwdMatchValidator(this.registerForm)
    )
  }



  validacionMensajes = {
    'nombre': [
      { type: 'required', message: 'El nombre es obligatorio' },
      { type: 'minlength', message: 'El nombre debe tener al menos 3 caracteres' }
    ],
    'apellidos': [
      { type: 'required', message: 'Los apellidos son obligatorios' },
      { type: 'minlength', message: 'Los apellidos deben tener al menos 3 caracteres' }
    ],
    'email': [
      { type: 'required', message: 'El email es obligatorio' },
      { type: 'email', message: 'Formato inválido' },
    ],
    'pwd': [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 8 caracteres' }
    ],
    'pwd2': [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 8 caracteres' },
    ]
  }

  async register() {
    if (this.registerForm.invalid) return
    const datosUsuario = this.registerForm.value;

    const respuesta = await this._usuarioService.crearUsuario(datosUsuario);
    console.log(respuesta);
    if (respuesta.status == 'ok') {
      this._router.navigate(['login']);
    }

  }

}

function pwdMatchValidator(g: FormGroup) {
  return g.get('pwd').value === g.get('pwd2').value
    ? false : { mismatch: true };
}
