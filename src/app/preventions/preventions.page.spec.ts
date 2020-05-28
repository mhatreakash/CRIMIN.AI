import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreventionsPage } from './preventions.page';

describe('PreventionsPage', () => {
  let component: PreventionsPage;
  let fixture: ComponentFixture<PreventionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreventionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
