import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormGroup,
         FormControl,
         Validators,
         FormBuilder} from '@angular/forms';    
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../interfaces/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  userdata: any;
  registerForm: FormGroup;

  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private router: Router,
              private authservice: AuthService,
              private toastcontroller: ToastController,
              private fbuilder: FormBuilder) {
                this.registerForm = this.fbuilder.group({
                  'nombre'  : new FormControl("", [Validators.required]),
                  'password'  : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'confirmarpassword'  : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'email'  : new FormControl("", [Validators.required]),
                  'sede'  : new FormControl("", [Validators.required]),
                  'ano'  : new FormControl("", [Validators.required]),
                  'semestre'  : new FormControl("", [Validators.required]),
                  'horas_sem'  : new FormControl("", [Validators.required]),
                  'jornada'  : new FormControl("", [Validators.required]),
                  'asignatura'  : new FormControl("", [Validators.required])
                })
               }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario: Usuario={
    nombre:'',
    apellido: '',
    email:'',
    sede:'',
    asignatura:'',
    jornada: '',
    ano:0,
    semestre:'',
    horas_sem: 0,
    password:''
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Se han enviado sus datos!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  crearRegistro(){
    this.authservice.crearUsuario(this.usuario).subscribe();
    this.router.navigateByUrl("/inicio")
  }


  Enviar(){
    console.log('Registro Enviado');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.sede='';
    this.usuario.password='';
    this.usuario.email='';
  }

}