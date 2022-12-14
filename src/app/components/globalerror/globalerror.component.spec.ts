import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalerrorComponent } from './globalerror.component';

describe('GlobalerrorComponent', () => {
  let component: GlobalerrorComponent;
  let fixture: ComponentFixture<GlobalerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalerrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
