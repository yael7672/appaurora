import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIncidentComponent } from './search-incident.component';

describe('SearchIncidentComponent', () => {
  let component: SearchIncidentComponent;
  let fixture: ComponentFixture<SearchIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
