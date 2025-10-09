import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPresentacion1Component } from './slider-presentacion1.component';

describe('SliderPresentacion1Component', () => {
  let component: SliderPresentacion1Component;
  let fixture: ComponentFixture<SliderPresentacion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPresentacion1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderPresentacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
