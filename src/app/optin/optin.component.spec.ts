import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptinComponent } from './optin.component';

describe('OptinComponent', () => {
  let component: OptinComponent;
  let fixture: ComponentFixture<OptinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
