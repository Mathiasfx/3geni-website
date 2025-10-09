import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  it('should have a container with primary background color', () => {
    const container = fixture.debugElement.query(By.css('.presentation-container'));
    expect(container).toBeTruthy();
    expect(getComputedStyle(container.nativeElement).backgroundColor).toBe('rgb(33, 122, 126)'); // #217A7E
  });

  it('should display the banner image', () => {
    const image = fixture.debugElement.query(By.css('img[src="assets/img/banner.png"]'));
    expect(image).toBeTruthy();
  });

  it('should have white text content', () => {
    const textContent = fixture.debugElement.query(By.css('.text-content'));
    expect(textContent).toBeTruthy();
    expect(getComputedStyle(textContent.nativeElement).color).toBe('rgb(255, 255, 255)');
  });

  it('should have highlighted text with correct background', () => {
    const highlight = fixture.debugElement.query(By.css('.highlight'));
    expect(highlight).toBeTruthy();
    expect(getComputedStyle(highlight.nativeElement).backgroundColor).toBe('rgb(23, 94, 94)'); // #175E5E
    expect(getComputedStyle(highlight.nativeElement).color).toBe('rgb(242, 199, 91)'); // #F2C75B
  });
});
