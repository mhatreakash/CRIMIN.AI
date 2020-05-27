import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UiComponent2Page } from './ui-component2.page';

describe('UiComponent2Page', () => {
  let component: UiComponent2Page;
  let fixture: ComponentFixture<UiComponent2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UiComponent2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
