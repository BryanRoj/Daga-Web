import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  constructor(private appComponent: AppComponent) { }

  ngOnInit():void  {
    //this.appComponent.mostrarMenuCliente = false; // Mostrar el menú de contacto
    this.updateCurrentGroup();
  }

  clase:string = "mx-auto d-block card-img-top w-25";
  clase_carrucel:string = "mx-auto d-block card-img-top";

  imagenes:any[] = [
    { ruta: 'assets/img/principal1.png' },
    { ruta: 'assets/img/principal2.png' },
    { ruta: 'assets/img/principal3.png' },
    { ruta: 'assets/img/principal4.png' }
  ];

  cartas:any[] = [
    { 
      id: 1, 
      nombre: 'NOSOTROS', 
      ruta: 'assets/img/icono-nosotros.webp', 
      descripcion: "CONSORCIO DISARGESA S.A.C. es una empresa más de 8 años en el mercado, dedicada a la Distribución y Venta de Productos de Tecnopor para uso de la..."
    },
    { 
      id: 2, 
      nombre: 'MISION', 
      ruta: 'assets/img/icono-mision.jpg', 
      descripcion: "CONSORCIO DISARGESA S.A.C. pretende conseguir que nuestros clientes tengan plena confianza en los productos que les ofrecemos."
    },
    { 
      id: 3, 
      nombre: 'VISION', 
      ruta: 'assets/img/icono-vision.png', 
      descripcion: "Consolidarnos una empresa líder en la venta y distribución a nivel nacional de productos de Tecnopor (Poliestireno Expandido) ofreciendo calidad y servicio al mejor precio."
    },
    { 
      id: 4, 
      nombre: 'SERVICIOS', 
      ruta: 'assets/img/icono-servicio.png', 
      descripcion: "Nuestro equipo está conformado por personal calificado, con experiencia y capacitada en temas de Construcción."
    }
  ];
  
  currentIndex = 0;
  groupSize = 4;

  Grupo: any[] = [];
  carrucel_2 = [
    { 
      id: 1, 
      nombre: 'LADRILLOS DE TECNOPOR', 
      ruta: 'assets/img/ladrillos.jpg', 
    },
    { 
      id: 2, 
      nombre: 'PLANCHAS DE TECNOPOR', 
      ruta: 'assets/img/plancha.jpg', 
    },
    { 
      id: 3, 
      nombre: 'BOVEDILLAS', 
      ruta: 'assets/img/bovedillas.jpg', 
    },
    { 
      id: 4, 
      nombre: 'PERLAS DE TECNOPOR', 
      ruta: 'assets/img/perlas.jpg', 
    },
    { 
      id: 5, 
      nombre: 'PANELES PREFABRICADOS', 
      ruta: 'assets/img/paneles.jpg', 
    },
    { 
      id: 6, 
      nombre: 'HERRAMIENTAS', 
      ruta: 'assets/img/herramientas.jpg', 
    }
  ];

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
}
