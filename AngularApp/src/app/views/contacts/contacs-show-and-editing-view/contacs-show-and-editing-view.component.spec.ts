import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacsShowAndEditingViewComponent } from './contacs-show-and-editing-view.component';

describe('ContacsShowAndEditingViewComponent', () => {
  let component: ContacsShowAndEditingViewComponent;
  let fixture: ComponentFixture<ContacsShowAndEditingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacsShowAndEditingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacsShowAndEditingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
