import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-settings-menu",
  templateUrl: "./settings-menu.component.html",
  styleUrls: ["./settings-menu.component.scss"],
})
export class SettingsMenuComponent implements OnInit {
  constructor(
    private popCtrl: PopoverController,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  public dismissPopover() {
    this.popCtrl.dismiss();
  }

  public cerrarSesion() {
    this.authService.logout();
    this.dismissPopover();
    this.router.navigate(["login"]);
  }
}
