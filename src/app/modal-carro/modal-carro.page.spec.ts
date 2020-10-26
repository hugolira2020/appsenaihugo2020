import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCarroPage } from './modal-carro.page';

describe('ModalCarroPage', () => {
  let component: ModalCarroPage;
  let fixture: ComponentFixture<ModalCarroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCarroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
