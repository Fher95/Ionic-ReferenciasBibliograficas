import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailReferenciaPage } from './detail-referencia.page';

describe('DetailReferenciaPage', () => {
  let component: DetailReferenciaPage;
  let fixture: ComponentFixture<DetailReferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReferenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailReferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
