import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpotRaggingPage } from './spot-ragging.page';

describe('SpotRaggingPage', () => {
  let component: SpotRaggingPage;
  let fixture: ComponentFixture<SpotRaggingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotRaggingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpotRaggingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
