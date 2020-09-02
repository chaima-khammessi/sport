import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrangeantComponent } from './ecrangeant.component';

describe('EcrangeantComponent', () => {
  let component: EcrangeantComponent;
  let fixture: ComponentFixture<EcrangeantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcrangeantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcrangeantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
