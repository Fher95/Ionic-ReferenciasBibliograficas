import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { ReferenciasService } from "../services/referencias.service";
import { ReferenciaBibliografica } from "../models/referencias.interface";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-add-referencia",
  templateUrl: "./add-referencia.page.html",
  styleUrls: ["./add-referencia.page.scss"],
})
export class AddReferenciaPage implements OnInit {
  private idUsuario;
  public modoEdicion = true;
  public formulario: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private referenciaService: ReferenciasService,
    private loadingController: LoadingController,
    private authService: AuthService,
    private db: AngularFirestore,
    private fb: FormBuilder
  ) {}

  crearFormulario() {
    this.formulario = this.fb.group({
      idreferencia: [null, Validators.required],
      titulopub: [null, Validators.required],
      autores: [null, Validators.required],
      tipopub: [null, Validators.required],
      eventorevista: [null],
      doi: [null],
      anyopub: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.idUsuario = this.authService.userIdActual;
    this.crearFormulario();
    const idRef = this.route.snapshot.params["id"];
    if (idRef) {
      this.modoEdicion = false;
      this.cargarReferencia(idRef);
    }
  }

  private async cargarReferencia(idReferencia) {
    const loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await loading.present();

    this.referenciaService
      .getReferencia(idReferencia)
      .pipe(
        tap((referencia) => {
          this.actualizarFormulario(referencia);
          loading.dismiss();
        })
      )
      .subscribe();
  }

  private actualizarFormulario(objReferencia: ReferenciaBibliografica) {
    console.log("Obj referencia recibida: ", objReferencia);
    this.formulario.patchValue({
      titulopub: objReferencia.titulopub,
      tipopub: objReferencia.tipopub,
      autores: objReferencia.autores,
      eventorevista: objReferencia.eventorevista,
      doi: objReferencia.doi,
      anyopub: objReferencia.anyopub,
      idreferencia: objReferencia.idreferencia,
    });
  }

  guardarReferencia() {
    const objReferencia: ReferenciaBibliografica = {
      titulopub: this.formulario.get("titulopub").value,
      tipopub: this.formulario.get("tipopub").value,
      autores: this.formulario.get("autores").value,
      eventorevista: this.formulario.get("eventorevista").value,
      doi: this.formulario.get("doi").value,
      anyopub: this.formulario.get("anyopub").value,
      idreferencia: this.formulario.get("idreferencia").value,
    };
    console.log("Objeto referencia: ", objReferencia);
    if (this.route.snapshot.params["id"]) {
      const idRef = this.route.snapshot.params["id"];
      this.updateReferencia(objReferencia, idRef);
      return;
    }
    this.saveReferencia(objReferencia);
  }

  activarEdicion() {
    this.modoEdicion = true;
  }

  async saveReferencia(objReferencia: ReferenciaBibliografica) {
    const loading = await this.loadingController.create({
      message: "Guardando....",
    });
    await loading.present();

    this.referenciaService.addReferencia(objReferencia).then(() => {
      loading.dismiss();
      this.nav.navigateForward("/lista-referencias");
    });
  }

  async updateReferencia(
    objReferencia: ReferenciaBibliografica,
    idRef: string
  ) {
    const loading = await this.loadingController.create({
      message: "Guardando...",
    });
    await loading.present();
    this.referenciaService.updateReferencia(objReferencia, idRef).then(() => {
      loading.dismiss();
      this.nav.navigateForward("/lista-referencias");
    });
  }
}
