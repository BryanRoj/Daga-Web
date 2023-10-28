import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';
import { productos } from 'src/app/modelo/productos';
import { Iproductos } from 'src/app/modelo/Iproductos';
import { usuarios } from 'src/app/modelo/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Iusuarios } from 'src/app/modelo/Iusuarios';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  tipoModificacion: string = 'modProd';
  parametros: any;
  productos: Iproductos[] = [];
  objProductos: productos = new productos();
  textoFormProducto: string = "Insertar Producto";
  insUpd: boolean = true; // insertar es True

  ngOnInit():void  {
    this.appComponent.mostrarMenuAdministrador = false; // Mostrar el menú de contacto
    this.route.queryParamMap.subscribe(
      (params) => { this.parametros = { ...params.keys, ...params } }
    );
    this.getUsuarios();
    this.getProductos();
    //this.verObj();
  }

  constructor(private route: ActivatedRoute, private servicio: ProductosService, private servicioUser: UsuariosService, private appComponent: AppComponent) { }
  
  /*************************************************************************************/
  
  formProductos = new FormGroup({
    codigo_producto: new FormControl(),
    nombre: new FormControl(),
    caracteristicas: new FormControl(),
    largo: new FormControl(),
    ancho: new FormControl(),
    alto: new FormControl(),
    stock: new FormControl(),
    precio: new FormControl(),
    categoria_id: new FormControl()
  });

  getProductos = () => {
    this.servicio.getProductos().subscribe((resp: any) => {
      //console.log(resp); // Pruebas
      this.productos = resp;
    });
  }

  registrarProducto = () => {
    this.objProductos.codigo_producto = this.formProductos.value.codigo_producto;
    this.objProductos.nombre = this.formProductos.value.nombre;
    this.objProductos.caracteristicas = this.formProductos.value.caracteristicas;
    this.objProductos.largo = this.formProductos.value.largo;
    this.objProductos.ancho = this.formProductos.value.ancho;
    this.objProductos.alto = this.formProductos.value.alto;
    this.objProductos.stock = this.formProductos.value.stock;
    this.objProductos.precio = this.formProductos.value.precio;
    this.objProductos.categoria_id = this.formProductos.value.categoria_id;

    //INSERTAR
    if (this.insUpd) {
      this.servicio.postProductos(this.objProductos).subscribe(resp  => {
        this.formProductos.reset(); // Limpiar el formulario
        this.getProductos();
      });
    } else { //ACTUALIZAR
      this.servicio.putProductos(this.objProductos).subscribe(resp => {
        this.formProductos.reset();
        this.getProductos();
        this.textoFormProducto = "Insertar Producto";
        this.insUpd = true;
      })
    }
  }

  editarProducto = (p: Iproductos) => {
    this.objProductos.id = p.id;
    this.formProductos.controls['codigo_producto'].setValue(p.codigo_producto);
    this.formProductos.controls['nombre'].setValue(p.nombre);
    this.formProductos.controls['caracteristicas'].setValue(p.caracteristicas);
    this.formProductos.controls['largo'].setValue(p.largo);
    this.formProductos.controls['ancho'].setValue(p.ancho);
    this.formProductos.controls['alto'].setValue(p.alto);
    this.formProductos.controls['stock'].setValue(p.stock);
    this.formProductos.controls['precio'].setValue(p.precio);
    this.formProductos.controls['categoria_id'].setValue(p.categoria_id);

    //Texto
    this.textoFormProducto = "Actualizar Producto";
    this.insUpd = false;
  }

  eliminarProducto = (p: Iproductos) => {
    let confirm = window.confirm(`Seguro que deseas eliminar a ${p.nombre}`);
    if (confirm) {
      this.servicio.deleProductos(p.id).subscribe(resp => {
          this.getProductos();
        })
    }
  }

  /**************************************************************************/

  usuarios: Iusuarios[] = [];
  objUsuarios: usuarios = new usuarios();
  insUpdUsuario: boolean = true;
  textoFormUser: string = "Insertar Usuario";
  
  formUsuarios= new FormGroup({
    usuario: new FormControl(),
    contrasena: new FormControl(),
    nombre: new FormControl(),
    apellido: new FormControl(),
    dni: new FormControl(),
    edad: new FormControl(),
    fecha_nacimiento: new FormControl(),
    correo: new FormControl(),
    telefono: new FormControl(),
    tipo_usuario: new FormControl()
  });
  
  getUsuarios = () => {
    this.servicioUser.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp;
    });
  }

  registrarUser = () => {
    this.objUsuarios.usuario = this.formUsuarios.value.usuario;
    this.objUsuarios.contrasena = this.formUsuarios.value.contrasena;
    this.objUsuarios.nombre = this.formUsuarios.value.nombre;
    this.objUsuarios.apellido = this.formUsuarios.value.apellido;
    this.objUsuarios.dni = this.formUsuarios.value.dni;
    this.objUsuarios.edad = this.formUsuarios.value.edad;
    this.objUsuarios.fecha_nacimiento = this.formUsuarios.value.fecha_nacimiento;
    this.objUsuarios.correo = this.formUsuarios.value.correo;
    this.objUsuarios.telefono = this.formUsuarios.value.telefono;
    this.objUsuarios.tipo_usuario = this.formUsuarios.value.tipo_usuario;
  
    // INSERTAR
    if (this.insUpdUsuario) {
      this.servicioUser.postUsuarios(this.objUsuarios).subscribe(resp => {
        this.formUsuarios.reset(); // Limpiar el formulario
        this.getUsuarios();
      });
    } else { // ACTUALIZAR
      this.servicioUser.putUsuarios(this.objUsuarios).subscribe(resp => {
        this.formUsuarios.reset();
        this.getUsuarios();
        this.textoFormUser = "Insertar Usuario";
        this.insUpdUsuario = true;
      })
    }
  }
  
  editarUser = (u: Iusuarios) => {
    this.objUsuarios.id = u.id;
    this.formUsuarios.controls['usuario'].setValue(u.usuario);
    this.formUsuarios.controls['contrasena'].setValue(u.contrasena);
    this.formUsuarios.controls['nombre'].setValue(u.nombre);
    this.formUsuarios.controls['apellido'].setValue(u.apellido);
    this.formUsuarios.controls['dni'].setValue(u.dni);
    this.formUsuarios.controls['edad'].setValue(u.edad);
    this.formUsuarios.controls['fecha_nacimiento'].setValue(u.fecha_nacimiento);
    this.formUsuarios.controls['correo'].setValue(u.correo);
    this.formUsuarios.controls['telefono'].setValue(u.telefono);
    this.formUsuarios.controls['tipo_usuario'].setValue(u.tipo_usuario);
  
    // Texto
    this.textoFormUser = "Actualizar Usuario";
    this.insUpdUsuario = false;
  }
  
  eliminarUser = (u: Iusuarios) => {
    let confirm = window.confirm(`¿Seguro que desea eliminar al usuario ${u.usuario}?`);
    if (confirm) {
      this.servicioUser.deleteUsuarios(u.id).subscribe(resp => {
        this.getUsuarios();
      });
    }
  }

selectedImage: string | undefined;

onImageSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
}
