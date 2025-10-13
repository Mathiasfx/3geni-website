import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPresentacion2Component } from './slider-presentacion2.component';

describe('SliderPresentacion2Component', () => {
  let component: SliderPresentacion2Component;
  let fixture: ComponentFixture<SliderPresentacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPresentacion2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderPresentacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
