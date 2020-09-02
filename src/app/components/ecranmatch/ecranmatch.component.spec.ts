import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranmatchComponent } from './ecranmatch.component';

describe('EcranmatchComponent', () => {
  let component: EcranmatchComponent;
  let fixture: ComponentFixture<EcranmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcranmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcranmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
