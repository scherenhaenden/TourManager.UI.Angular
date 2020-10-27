import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInputFormularComponent } from './property-input-formular.component';

describe('PropertyInputFormularComponent', () => {
  let component: PropertyInputFormularComponent;
  let fixture: ComponentFixture<PropertyInputFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyInputFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInputFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
