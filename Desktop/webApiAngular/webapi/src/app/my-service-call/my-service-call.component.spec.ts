import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceCallComponent } from './my-service-call.component';

describe('MyServiceCallComponent', () => {
  let component: MyServiceCallComponent;
  let fixture: ComponentFixture<MyServiceCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyServiceCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
