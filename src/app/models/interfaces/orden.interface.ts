// src/app/modelos/Orden.ts
import { Producto } from './producto.interface';
import { EstadoOrden } from '../enums/estadoOrden.enum';

export interface Orden {
  id?: number;
  usuarioId: number;
  productos: Producto[];
  fechaCreacion: string;
  estado: EstadoOrden;
  expandir?: boolean;
}
