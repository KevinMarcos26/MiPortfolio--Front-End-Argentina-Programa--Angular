import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyskComponent } from './hysk.component';

describe('HyskComponent', () => {
  let component: HyskComponent;
  let fixture: ComponentFixture<HyskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
