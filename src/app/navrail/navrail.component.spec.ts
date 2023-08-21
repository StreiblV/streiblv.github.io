import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavrailComponent } from './navrail.component';

describe('NavrailComponent', () => {
  let component: NavrailComponent;
  let fixture: ComponentFixture<NavrailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavrailComponent]
    });
    fixture = TestBed.createComponent(NavrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
