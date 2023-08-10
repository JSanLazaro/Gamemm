import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidlistComponent } from './vidlist.component';

describe('VidlistComponent', () => {
  let component: VidlistComponent;
  let fixture: ComponentFixture<VidlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidlistComponent]
    });
    fixture = TestBed.createComponent(VidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
