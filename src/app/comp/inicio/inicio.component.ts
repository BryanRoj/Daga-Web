import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  clase: string = "mx-auto d-block card-img-top";
  clase_carrucel:string = "mx-auto d-block card-img-top";

  imagenes:any[] = [
    { ruta: 'assets/img/Daga Soluciones.jpg' }
  ];

  cartas:any[] = [
    { 
      id: 1, 
      nombre: 'NOSOTROS', 
      ruta: 'assets/img/icono-nosotros.webp', 
      descripcion: "Nuestra empresa se dedica a proporcionar soluciones integrales de seguridad para hogares y empresas. Con años de experiencia en el sector, nos hemos convertido en líderes confiables en el mercado de la seguridad. "
    },
    { 
      id: 2, 
      nombre: 'MISION', 
      ruta: 'assets/img/icono-mision.jpg', 
      descripcion: "Nuestra misión es salvaguardar lo que más valoras: tu hogar, tu familia y tus activos. Nos esforzamos por ofrecer soluciones de seguridad innovadoras y de vanguardia que brinden protección integral y tranquilidad a nuestros clientes."
    },
    { 
      id: 3, 
      nombre: 'VISION', 
      ruta: 'assets/img/icono-vision.png', 
      descripcion: "Nuestra visión es convertirnos en la empresa líder en soluciones de seguridad para hogares y empresas, reconocida por nuestra excelencia en el servicio al cliente, tecnología de vanguardia y productos innovadores. "
    },
    { 
      id: 4, 
      nombre: 'SERVICIOS', 
      ruta: 'assets/img/icono-servicio.png', 
      descripcion: "Nuestra empresa está conformada por personal calificado, con experiencia y capacitado en las últimas tecnologías para la seguridad del hogar o empresas."
    }
  ];
  
  currentIndex = 0;
  groupSize = 4;

  Grupo: any[] = [];
  carrucel_2 = [
    { 
      id: 1, 
      nombre: 'Camaras de Seguridad', 
      ruta: 'assets/img/camaras.jpg', 
    },
    { 
      id: 2, 
      nombre: 'Cerco Electrico', 
      ruta: 'assets/img/cercoElectrico.jpeg', 
    },
    { 
      id: 3, 
      nombre: 'Chapas Electricas', 
      ruta: 'assets/img/chapasElectricas.jpg', 
    },
    { 
      id: 4, 
      nombre: 'Gabinetes Contra Incendios', 
      ruta: 'assets/img/gabinetes.webp', 
    },
    { 
      id: 5, 
      nombre: 'Intercomunicadores', 
      ruta: 'assets/img/intercomunicadorEdificio.jpg', 
    },
    { 
      id: 6, 
      nombre: 'Puertas Automaticas', 
      ruta: 'assets/img/puertasAutomaticas.png', 
    },
    { 
      id: 7, 
      nombre: 'Sistemas Contra Incendios', 
      ruta: 'assets/img/sistConIncendios.jpg', 
    }
  ];

  ngOnInit() {
    this.updateCurrentGroup();
  }

  updateCurrentGroup() {
    const startIndex = this.currentIndex % this.carrucel_2.length;
    this.Grupo = [
      ...this.carrucel_2.slice(startIndex),
      ...this.carrucel_2.slice(0, startIndex)
    ].slice(0, this.groupSize);
  
    if (this.Grupo.length < this.groupSize) {
      const remaining = this.groupSize - this.Grupo.length;
      this.Grupo.push(...this.carrucel_2.slice(0, remaining));
    }
  }
  
  moveRight() {
    this.currentIndex++;
    this.updateCurrentGroup();
  }
  
  moveLeft() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.carrucel_2.length - 1;
    }
    this.updateCurrentGroup();
  }

  sections = [
    {
      carouselId: 'carrusel1',
      carouselItems: [
        { imageSrc: 'assets/img/camara.jpg' },
        { imageSrc: 'assets/img/camaras.jpg' },
        { imageSrc: 'assets/img/camara2.jpg' }
      ],
      title: 'SERVICIO DE INSTALACION Y MANTENIMIENTO DE CAMARAS',
      content: ' Entendemos que la seguridad de tu hogar o empresa es una prioridad fundamental. Nuestras cámaras de seguridad de alta calidad están diseñadas para brindarte una vigilancia confiable y una tranquilidad total. Ya sea que desees proteger tu hogar, supervisar tus instalaciones comerciales o salvaguardar activos valiosos, nuestro equipo de expertos en seguridad está listo para ayudarte.'
    },
    {
      carouselId: 'carrusel2',
      carouselItems: [
        { imageSrc: 'assets/img/mant - puerta levadiza.jpg' },
        { imageSrc: 'assets/img/mant - puerta batiente.jpg' },
        { imageSrc: 'assets/img/mant - puerta corrediza.jpeg' }
      ],
      title: 'MANTENIMIENTO DE PUERTAS AUTOMATICAS',
      content: 'En Daga Soluciones nos especializamos en el mantenimiento de puertas, incluyendo puertas seccionales, puertas levadizas, puertas corredizas y puertas batientes. Nuestro equipo altamente capacitado se encarga de garantizar el funcionamiento óptimo, la durabilidad y la seguridad de tus puertas. Realizamos inspecciones exhaustivas, ajustes necesarios y pruebas rigurosas en los sistemas de seguridad. Confía en nosotros para mantener tus puertas en excelentes condiciones y asegurar su funcionamiento sin problemas.'
    },
    {
      carouselId: 'carrusel3',
      carouselItems: [
        { imageSrc: 'assets/img/cerco1.jpg' },
        { imageSrc: 'assets/img/cerco3.jpg' },
        { imageSrc: 'assets/img/cerco4.jpg' }
      ],
      title: 'SERVICIO DE INSTALACION Y MANTENIMIENTO DE CERCO ELECTRICO',
      content: '¿Por qué elegir un cerco eléctrico? El cerco eléctrico es una opción altamente eficaz para disuadir intrusos y proteger tu propiedad. Nuestro equipo de expertos en seguridad cuenta con amplia experiencia en la instalación y mantenimiento de cercos eléctricos, garantizando la seguridad y tranquilidad que buscas.'
    },
    {
      carouselId: 'carrusel4',
      carouselItems: [
        { imageSrc: 'assets/img/intercomunicador.jpg' },
        { imageSrc: 'assets/img/intercomunicador3.jpg' },
        { imageSrc: 'assets/img/intercomunicador1.jpg' }
      ],
      title: 'SERVICIO DE INSTALACION Y MANTENIMIENTO DE INTERCOMUNICADORES',
      content: 'En Daga Soluciones nos especializamos en proporcionar soluciones de comunicación segura y conveniente para hogares y empresas. Nuestro servicio destacado incluye la instalación y configuración de sistemas de intercomunicadores, diseñados para mejorar la comunicación interna y fortalecer la seguridad en tu propiedad.'
    }
  ];
}
