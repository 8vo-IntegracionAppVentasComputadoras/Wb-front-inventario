import { NgModule } from '@angular/core';
import { DetallesProductoPageComponent } from './pages/detalles-producto/detalles-producto.component';
import { EspecificacionListaPageComponent } from './pages/especificacion-lista/especificacion-lista.component';
import { EspecificacionProductoPageComponent } from './pages/especificacion-producto/especificacion-producto.component';
import { RegistrarComputadoraPageComponent } from './pages/registrar-computadora/registrar-computadora.component';
import { VerComputadorasPageComponent } from './pages/ver-computadoras/ver-computadoras.component';
import { CommonModule } from '@angular/common';
import { AdminLayoutPageComponent } from './layout/admin-layout-page/admin-layout-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../angular-material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { PerfilAdminPageComponent } from './pages/perfil-admin/perfil-admin-page/perfil-admin-page.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, AdminRoutingModule, FormsModule, SharedModule],
  exports: [],
  declarations: [
    DetallesProductoPageComponent,
    EspecificacionListaPageComponent,
    EspecificacionProductoPageComponent,
    RegistrarComputadoraPageComponent,
    VerComputadorasPageComponent,
    AdminLayoutPageComponent,
    PerfilAdminPageComponent,
  ],
  providers: [],
})
export class AdminModule {}
