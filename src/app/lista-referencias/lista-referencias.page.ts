import { Component, OnInit } from "@angular/core";
import { tap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import { User } from "../shared/user.interface";
import { Router } from "@angular/router";
import { ReferenciasService } from "../services/referencias.service";
import { ReferenciaBibliografica } from "../models/referencias.interface";
import { PopoverController, LoadingController } from '@ionic/angular';
import { SettingsMenuComponent } from "../settings-menu/settings-menu.component";

@Component({
  selector: "app-lista-referencias",
  templateUrl: "./lista-referencias.page.html",
  styleUrls: ["./lista-referencias.page.scss"],
})
export class ListaReferenciasPage implements OnInit {
  private usuario: User;
  constructor(
    public popoverController: PopoverController,
    private authService: AuthService,
    private referenciaService: ReferenciasService,
    private router: Router,
    private loadingController: LoadingController
  ) {
    
  }

  public refs: ReferenciaBibliografica[];
  currentPopover = null;

  ionViewWillEnter() {

    const userId = this.authService.userIdActual;
    this.referenciaService.setCollections(userId);
    this.cargarLista();

    // this.authService.user$
    // .pipe(      
    //   tap((user) => {
    //     this.usuario = user;
    //     console.log('Usuario Lista referencias: ', user.uid);
    //     this.referenciaService.setCollections(user.uid);          
    //     this.cargarLista();
    //   })
    // ).subscribe();
    

  }
  ngOnInit() {
    // console.log('Usuario actual en lista: ', this.authService.getActualUser())
    // this.authService.user$.pipe(
    //   tap(
    //     user => {
    //       this.usuario = user;
    //       console.log('Usuario: ',this.usuario);
    //     }
    //   )
    // )
    // .subscribe();
    
    
      
  }

  async cargarLista() {    
    const loading = await this.loadingController.create({
      message: "Cargando lista...",
    });
    await loading.present();

    this.referenciaService
      .getReferencias()
      .pipe(
        tap((lista) => {
          loading.dismiss();;
          this.refs = lista;          
        })
      )
      .subscribe();
  }  

  onAgregarReferencia() {    
    this.router.navigate(["add-referencia"]);
  }

  eliminarReferencia(refId) {
    this.referenciaService.removeReferencia(refId);
  }

  public verDetalles(idRef) {
    this.router.navigate(["add-referencia", idRef]);
  }

  async _popOver(ev: any) {
    const popOver = await this.popoverController.create({
      component: SettingsMenuComponent,
      cssClass: "my-popover-class",
      event: ev,
    });

    popOver.onDidDismiss().then((data) => {console.log(data); this.cerrarComponente()} );

    return await popOver.present();
  }

  cerrarComponente() {
    close();
  }
}
