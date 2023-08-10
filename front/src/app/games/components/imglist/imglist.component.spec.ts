import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImglistComponent } from './imglist.component';

describe('ImglistComponent', () => {
  let component: ImglistComponent;
  let fixture: ComponentFixture<ImglistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImglistComponent]
    });
    fixture = TestBed.createComponent(ImglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
