import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddReferenciaPage } from './add-referencia.page';

describe('AddReferenciaPage', () => {
  let component: AddReferenciaPage;
  let fixture: ComponentFixture<AddReferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReferenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddReferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
