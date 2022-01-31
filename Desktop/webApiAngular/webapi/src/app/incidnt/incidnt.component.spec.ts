import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidntComponent } from './incidnt.component';

describe('IncidntComponent', () => {
  let component: IncidntComponent;
  let fixture: ComponentFixture<IncidntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
