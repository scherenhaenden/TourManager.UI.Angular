import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacsMainComponent } from './contacs-main.component';

describe('ContacsMainComponent', () => {
  let component: ContacsMainComponent;
  let fixture: ComponentFixture<ContacsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
