import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartnewsComponent } from './cartnews.component';

describe('CartnewsComponent', () => {
  let component: CartnewsComponent;
  let fixture: ComponentFixture<CartnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
