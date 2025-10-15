import { Component } from '@angular/core';
import { SliderPresentacion1Component } from './components/slider-presentacion1/slider-presentacion1.component';
import { SliderPresentacion2Component } from "./components/slider-presentacion2/slider-presentacion2.component";
import { SliderPresentacion3Component } from "./components/slider-presentacion3/slider-presentacion3.component";
import { QuienesSomosComponent } from "./components/quienes-somos/quienes-somos.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderPresentacion1Component, SliderPresentacion2Component, SliderPresentacion3Component, QuienesSomosComponent, ServiciosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
