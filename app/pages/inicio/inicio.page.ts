import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController: MenuController,
              private authservice: AuthService,
              private router: Router) { }

  ngOnInit() {
    return sessionStorage.getItem('email')
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario = this.authservice.GetName();

  logOut() {
    this.authservice.logout();
    this.router.navigate(['/inicio']);
  }

}
