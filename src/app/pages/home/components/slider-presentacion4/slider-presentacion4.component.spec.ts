import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPresentacion4Component } from './slider-presentacion4.component';

describe('SliderPresentacion4Component', () => {
  let component: SliderPresentacion4Component;
  let fixture: ComponentFixture<SliderPresentacion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPresentacion4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderPresentacion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
