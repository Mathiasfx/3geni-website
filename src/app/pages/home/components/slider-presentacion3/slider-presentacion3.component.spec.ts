import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPresentacion3Component } from './slider-presentacion3.component';

describe('SliderPresentacion3Component', () => {
  let component: SliderPresentacion3Component;
  let fixture: ComponentFixture<SliderPresentacion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPresentacion3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderPresentacion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
