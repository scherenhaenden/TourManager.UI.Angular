import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonNumbersViewComponent } from './telefon-numbers-view.component';

describe('TelefonNumbersViewComponent', () => {
  let component: TelefonNumbersViewComponent;
  let fixture: ComponentFixture<TelefonNumbersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonNumbersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonNumbersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
