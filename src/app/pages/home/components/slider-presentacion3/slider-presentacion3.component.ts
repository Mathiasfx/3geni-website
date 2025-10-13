import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-presentacion3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-presentacion3.component.html',
  styleUrls: ['./slider-presentacion3.component.scss']
})
export class SliderPresentacion3Component {
  eventos = [
    { src: 'assets/img/fotoevento1.png', alt: 'Evento Lideresas' },
    { src: 'assets/img/fotoevento2.png', alt: 'Grupo de participantes' },
    { src: 'assets/img/fotoevento3.png', alt: 'Evento Protagonistas' },
    { src: 'assets/img/fotoevento4.png', alt: 'Encuentro de mujeres' }
  ];
}
