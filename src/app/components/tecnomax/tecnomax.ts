import { Component, inject, signal } from '@angular/core';
import { form, required, min, FormField } from '@angular/forms/signals';
import { Producto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';
@Component({selector:'app-tecnomax',standalone:true,imports:[FormField],templateUrl:'./tecnomax.html',styleUrl:'./tecnomax.css'})
export class TecnoMaxComponent {
  private productoService=inject(ProductoService);
  productos:Producto[]=this.productoService.mostrar();
  mensaje=signal('');
  registro=signal({nombre:'',edad:0});
  formulario=form(this.registro,(s)=>{required(s.nombre,{message:'El nombre es obligatorio'});min(s.edad,18,{message:'Debes ser mayor de edad'});});
  guardar(event:Event){event.preventDefault();if(this.formulario().invalid()){this.mensaje.set('Completa correctamente el formulario.');return;}this.mensaje.set('¡Registro guardado correctamente!');this.limpiar();}
  limpiar(){this.registro.set({nombre:'',edad:0});}
}
