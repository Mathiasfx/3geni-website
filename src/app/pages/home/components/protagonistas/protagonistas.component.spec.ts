import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtagonistasComponent } from './protagonistas.component';

describe('ProtagonistasComponent', () => {
  let component: ProtagonistasComponent;
  let fixture: ComponentFixture<ProtagonistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtagonistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtagonistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
