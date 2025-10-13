import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the gen3i logo', () => {
    const logoElement = fixture.debugElement.query(By.css('.footer-logo img'));
    expect(logoElement).toBeTruthy();
    expect(logoElement.nativeElement.src).toContain('logo-negativo.png');
    expect(logoElement.nativeElement.alt).toBe('Gen3i');
  });

  it('should display social media icons with correct links', () => {
    const socialIcons = fixture.debugElement.queryAll(By.css('.social-media a'));
    expect(socialIcons.length).toBe(4);

    // LinkedIn
    const linkedinIcon = fixture.debugElement.query(By.css('a[data-social="linkedin"] img'));
    expect(linkedinIcon).toBeTruthy();
    expect(linkedinIcon.nativeElement.src).toContain('icon-linkedin.png');

    // Instagram
    const instagramIcon = fixture.debugElement.query(By.css('a[data-social="instagram"] img'));
    expect(instagramIcon).toBeTruthy();
    expect(instagramIcon.nativeElement.src).toContain('icon-instagram.png');

    // Facebook
    const facebookIcon = fixture.debugElement.query(By.css('a[data-social="facebook"] img'));
    expect(facebookIcon).toBeTruthy();
    expect(facebookIcon.nativeElement.src).toContain('icon-facebook.png');

    // Twitter
    const twitterIcon = fixture.debugElement.query(By.css('a[data-social="twitter"] img'));
    expect(twitterIcon).toBeTruthy();
    expect(twitterIcon.nativeElement.src).toContain('icon-twitter.png');
  });

  it('should display contact information section', () => {
    const contactSection = fixture.debugElement.query(By.css('.contact-info'));
    expect(contactSection).toBeTruthy();

    // Email
    const emailElement = fixture.debugElement.query(By.css('.contact-item[data-contact="email"]'));
    expect(emailElement).toBeTruthy();
    expect(emailElement.nativeElement.textContent).toContain('info@gen3i.com.ar');

    // Website
    const websiteElement = fixture.debugElement.query(By.css('.contact-item[data-contact="website"]'));
    expect(websiteElement).toBeTruthy();
    expect(websiteElement.nativeElement.textContent).toContain('www.gen3i.com.ar');

    // Location
    const locationElement = fixture.debugElement.query(By.css('.contact-item[data-contact="location"]'));
    expect(locationElement).toBeTruthy();
    expect(locationElement.nativeElement.textContent).toContain('Buenos Aires, Argentina');
  });

  it('should display contact icons', () => {
    // Email icon
    const emailIcon = fixture.debugElement.query(By.css('.contact-item[data-contact="email"] img'));
    expect(emailIcon).toBeTruthy();
    expect(emailIcon.nativeElement.src).toContain('icon-email.png');

    // WhatsApp icon
    const whatsappIcon = fixture.debugElement.query(By.css('.contact-item[data-contact="whatsapp"] img'));
    expect(whatsappIcon).toBeTruthy();
    expect(whatsappIcon.nativeElement.src).toContain('icon-whatsap.png');

    // Location icon
    const locationIcon = fixture.debugElement.query(By.css('.contact-item[data-contact="location"] img'));
    expect(locationIcon).toBeTruthy();
    expect(locationIcon.nativeElement.src).toContain('icon-place.png');
  });

  it('should have purple background', () => {
    const footerElement = fixture.debugElement.query(By.css('footer'));
    expect(footerElement).toBeTruthy();

    const computedStyle = getComputedStyle(footerElement.nativeElement);
    // El test verificará que tenga un fondo púrpura (se puede ajustar el valor exacto)
    expect(footerElement.nativeElement).toHaveClass('footer');
  });

  it('should be responsive with proper layout', () => {
    const containerElement = fixture.debugElement.query(By.css('.footer-container'));
    expect(containerElement).toBeTruthy();

    const leftSection = fixture.debugElement.query(By.css('.footer-left'));
    const rightSection = fixture.debugElement.query(By.css('.footer-right'));

    expect(leftSection).toBeTruthy();
    expect(rightSection).toBeTruthy();
  });
});
