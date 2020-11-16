import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsViewAsRelatedEntityComponent } from './contacts-view-as-related-entity.component';

describe('ContactsViewAsRelatedEntityComponent', () => {
  let component: ContactsViewAsRelatedEntityComponent;
  let fixture: ComponentFixture<ContactsViewAsRelatedEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsViewAsRelatedEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsViewAsRelatedEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
