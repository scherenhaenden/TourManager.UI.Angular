import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneNumbersViewComponent } from './telephone-numbers-view.component';

describe('TelephoneNumbersViewComponent', () => {
  let component: TelephoneNumbersViewComponent;
  let fixture: ComponentFixture<TelephoneNumbersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoneNumbersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneNumbersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
