import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private authService: AuthService, private router: Router, private loadingController: LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await loading.present();
    
    this.authService.user$.pipe(
      tap(user => {
        loading.dismiss();
        if (user.uid) {                   
          this.router.navigate(['lista-referencias']);
        }
      })
    ).subscribe();              
  }

  async onLogin(email, password) {
    try {
      const user = await this.authService.login(email.value, password.value);
      if (user) {
        // ToDo: Verificar Email
        const verificado = this.authService.isEmailVerified(user);                
        // this.redirectUser(verificado);
        this.redirectUser(true);        
      } else {
        this.redirectUser(false);
      }
    } catch (error) {
      console.log('Login error: ', error)
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authService.loginGoogle()
      if (user) {
        // ToDo Check Email
        const verificado =  this.authService.isEmailVerified(user);
        // this.redirectUser(verificado);
        this.redirectUser(true);
      } 
      else {
        this.redirectUser(false);
      }
    } catch (error) {
      console.log('Google Login error: ', error)
    }
  }

  private redirectUser(isVerified: boolean) {
    if (isVerified) {
      this.router.navigate(['lista-referencias']);
    } else {
      this.router.navigate(['verificar-email']);      
    }
  }

}
