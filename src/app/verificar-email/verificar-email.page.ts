import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.page.html',
  styleUrls: ['./verificar-email.page.scss'],
})
export class VerificarEmailPage implements OnInit {
  public mostrarMensajeExito = false;

  constructor(private route: ActivatedRoute,) { }
  ngOnInit() {
    const idRef = this.route.snapshot.params["registrado"];
    if (idRef) {
      this.mostrarMensajeExito = true;
    }
  }

}
