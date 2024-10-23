import { NgModule } from '@angular/core';
import { CustomerLayoutPageComponent } from './layout/customer-layout-page/customer-layout-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoPageComponent } from './pages/carrito/carrito.component';
import { OrdenesPageComponent } from './pages/ordenes/ordenes.component';
import { VerCatalogoPageComponent } from './pages/vercatalogo/vercatalogo.component';
import { PerfilCustomerComponent } from './pages/perfil-customer/perfil-customer.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { DetallesProductoPageComponent } from './pages/detalles-producto/detalles-producto.component';

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule, CustomerRoutingModule, SharedModule],
  exports: [],
  declarations: [
    CustomerLayoutPageComponent,
    CarritoPageComponent,
    OrdenesPageComponent,
    VerCatalogoPageComponent,
    PerfilCustomerComponent,
    DetallesProductoPageComponent
  ],
  providers: [],
})
export class CustomerModule {}
