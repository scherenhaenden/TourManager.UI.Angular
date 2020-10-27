import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVenuesComponent } from './show-venues.component';

describe('ShowVenuesComponent', () => {
  let component: ShowVenuesComponent;
  let fixture: ComponentFixture<ShowVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
