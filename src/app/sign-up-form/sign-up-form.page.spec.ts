import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpFormPage } from './sign-up-form.page';

describe('SignUpFormPage', () => {
  let component: SignUpFormPage;
  let fixture: ComponentFixture<SignUpFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
