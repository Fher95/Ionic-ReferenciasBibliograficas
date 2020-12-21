import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaReferenciasPage } from './lista-referencias.page';

describe('ListaReferenciasPage', () => {
  let component: ListaReferenciasPage;
  let fixture: ComponentFixture<ListaReferenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReferenciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaReferenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
