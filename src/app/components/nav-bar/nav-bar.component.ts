import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isMobileMenuOpen = false;

  constructor(private elementRef: ElementRef) {}

  // Detectar clicks fuera del componente para cerrar el menú
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Si el menú está abierto y el clic fue fuera del componente NavBar
    if (this.isMobileMenuOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu(event?: Event) {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Evitar que el evento se propague para que no se active el cierre inmediato
    event?.stopPropagation();
  }

  scrollToSection(sectionId: string) {
    // Primero cerrar el menú móvil para mejorar la experiencia de usuario
    this.isMobileMenuOpen = false;

    // Pequeño retraso para permitir que la animación de cierre del menú comience
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calcular la posición de desplazamiento considerando la altura del navbar
        const navbarHeight = 120; // Altura del navbar en píxeles
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        // Hacer el scroll con el offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Pequeño retraso de 100ms
  }
}
