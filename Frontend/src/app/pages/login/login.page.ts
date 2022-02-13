import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private _usuarioService:UsuarioService) { }

  public loginForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  async login() {
    if (this.loginForm.invalid) return
    const datosUsuario = this.loginForm.value;
    const respuesta = await this._usuarioService.login(datosUsuario);

    if (respuesta.status=='ok') {
      //this._router.navigate(['login']);

      console.log('Usuario logado');
    } else {
      console.log(respuesta.message);
    }
  }

  get email() {
    return this.loginForm.get('email')
  }
  get pwd() {
    return this.loginForm.get('pwd')
  }
  
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
  

  validacionMensajes = {
    'email': [
      { type: 'required', message: 'El email es obligatorio' },
      { type: 'email', message: 'Formato inválido' },
    ],
    'pwd': [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 8 caracteres' }
    ]
  }
}
