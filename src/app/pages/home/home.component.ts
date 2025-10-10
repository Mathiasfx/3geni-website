import { Component } from '@angular/core';
import { SliderPresentacion1Component } from './components/slider-presentacion1/slider-presentacion1.component';
import { SliderPresentacion2Component } from "./components/slider-presentacion2/slider-presentacion2.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderPresentacion1Component, SliderPresentacion2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
