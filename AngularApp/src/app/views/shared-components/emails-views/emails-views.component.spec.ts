import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsViewsComponent } from './emails-views.component';

describe('EmailsViewsComponent', () => {
  let component: EmailsViewsComponent;
  let fixture: ComponentFixture<EmailsViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
