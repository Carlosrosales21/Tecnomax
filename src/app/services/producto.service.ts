import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
@Injectable({providedIn:'root'})
export class ProductoService {
  private productos: Producto[] = [
    {id:1,nombre:'Laptop Pro',categoria:'Laptops',precio:2499,oferta:true,descripcion:'Laptop para estudio y trabajo.'},
    {id:2,nombre:'Smartphone X',categoria:'Celulares',precio:1299,oferta:true,descripcion:'Pantalla de alta resolución y gran rendimiento.'},
    {id:3,nombre:'Audífonos Air',categoria:'Accesorios',precio:249,descripcion:'Audio inalámbrico para todos los días.'},
    {id:4,nombre:'Monitor 24',categoria:'Monitores',precio:699,oferta:true,descripcion:'Monitor Full HD para oficina y entretenimiento.'}
  ];
  mostrar(): Producto[]{ return this.productos; }
}
