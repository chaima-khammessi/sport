import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaumatchComponent } from './tableaumatch.component';

describe('TableaumatchComponent', () => {
  let component: TableaumatchComponent;
  let fixture: ComponentFixture<TableaumatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableaumatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaumatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
