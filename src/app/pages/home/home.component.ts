import { Component } from '@angular/core';
import { SliderPresentacion1Component } from './components/slider-presentacion1/slider-presentacion1.component';
import { SliderPresentacion2Component } from "./components/slider-presentacion2/slider-presentacion2.component";
import { SliderPresentacion3Component } from "./components/slider-presentacion3/slider-presentacion3.component";
import { SliderPresentacion4Component } from "./components/slider-presentacion4/slider-presentacion4.component";
import { CasosExitoComponent } from "./components/casos-exito/casos-exito.component";
import { QuienesSomosComponent } from "./components/quienes-somos/quienes-somos.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { ProtagonistasComponent } from "./components/protagonistas/protagonistas.component";
import { InstagramComponent } from "./components/instagram/instagram.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderPresentacion1Component, SliderPresentacion2Component, SliderPresentacion3Component, SliderPresentacion4Component, CasosExitoComponent, QuienesSomosComponent, ServiciosComponent, ProtagonistasComponent, InstagramComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
