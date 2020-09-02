import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonpaginationComponent } from './bouttonpagination.component';

describe('BouttonpaginationComponent', () => {
  let component: BouttonpaginationComponent;
  let fixture: ComponentFixture<BouttonpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouttonpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouttonpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
