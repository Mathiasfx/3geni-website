import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss'],
})
export class QuienesSomosComponent {
  equipo = [
    {
      nombre: 'Norma Simonit',
      cargo: 'DIRECTORA GEN3i',
      foto: 'assets/img/norma.png',
      descripcion:
        'Consultora en igualdad de género y sostenibilidad, lidera Género 3i. Más de 30 años de experiencia en los sectores público y privado. Especialista en diseño e implementación de estrategias promotoras de equidad, innovación y desarrollo sostenible.',
      formacion: [
        'Licenciada en Relaciones Industriales (UNNE), con especialización en Estudios Feministas (UNCAus).',
        'Economía de los Cuidados (Certificación ONU MUJERES).',
        'Programa de Liderazgo (UTDT).',
      ],
      experiencia: [
        'Fue consultora generalista del Programa VALOR BID AMIA ,donde ha desarrollado programas de inversión social para compañías internacionales.',
        'Desde 2019 asesora a empresas, organizaciones de la sociedad civil y entes de gobierno promoviendo alianzas y articulación público privada para estrategias de triple impacto positivo.',
      ],
    },
    {
      nombre: 'Paula Cortés',
      cargo: 'CONSULTORA ASOCIADA',
      foto: 'assets/img/paula.png',
      descripcion:
        'Graduada de la Carrera de Ciencia Política de la UBA, con orientación en Relaciones Internacionales. Especializada en Liderazgo en Asistencia Humanitaria en escenarios complejos, UNDEF. Especial interés en temas de género, responsabilidad social empresarial, DDHH y refugiados. Desarrollo Sostenible, sostentabilidad.',
      formacion: [],
      experiencia: [],
    },
    {
      nombre: 'Marianela Feijóo',
      cargo: 'COMUNICACIÓN Y DISEÑO',
      foto: 'assets/img/marianela.png',
      descripcion:
        'Lic. en Publicidad con una sólida trayectoria en el campo de la comunicación y el diseño. A lo largo de su carrera, ha combinado su visión estratégica con una ejecución creativa, desarrollando su experiencia tanto en organizaciones como en medios de comunicación.',
      formacion: [],
      experiencia: [],
    },
    {
      nombre: 'Mathías Pereira',
      cargo: 'PROGRAMACIÓN',
      foto: 'assets/img/mathias.png',
      descripcion:
        'Desarrollador de software con amplia experiencia en el diseño e implementación de experiencias interactivas que fomentan el aprendizaje, la participación y el logro de objetivos.',
      formacion: ['lic. en Tecnologia de la Información y Comunicación (UNAF)'],
      experiencia: [],
    },
  ];
}
