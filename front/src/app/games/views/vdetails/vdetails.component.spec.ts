import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdetailsComponent } from './vdetails.component';

describe('VdetailsComponent', () => {
  let component: VdetailsComponent;
  let fixture: ComponentFixture<VdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VdetailsComponent]
    });
    fixture = TestBed.createComponent(VdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
