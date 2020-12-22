import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async onRegister(email, password) {
    try {
      const user = await this.authService.register(email.value, password.value);
      // this.redirectUser(user.emailVerified);      
      if (user) {
        this.router.navigate(["verificar-email", true]);
      }
    } catch (error) {
      console.log;
    }
  }

  private redirectUser(isVerified: boolean) {
    if (isVerified) {
      this.router.navigate(["lista-referencias"]);
    } else {
      this.router.navigate(["verificar-email"]);
    }
  }
}
