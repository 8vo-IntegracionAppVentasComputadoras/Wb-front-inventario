import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutPageComponent } from './layout/admin-layout-page/admin-layout-page.component';
import { RegistrarComputadoraPageComponent } from './pages/registrar-computadora/registrar-computadora.component';
import { VerComputadorasPageComponent } from './pages/ver-computadoras/ver-computadoras.component';
import { EspecificacionProductoPageComponent } from './pages/especificacion-producto/especificacion-producto.component';
import { PerfilPageComponent } from '../shared/home/pages/perfil/perfil.component';
import { EspecificacionListaPageComponent } from './pages/especificacion-lista/especificacion-lista.component';
import { DetallesProductoPageComponent } from './pages/detalles-producto/detalles-producto.component';
import { PerfilAdminPageComponent } from './pages/perfil-admin/perfil-admin-page/perfil-admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutPageComponent,
    children: [
      {
        path: 'registro-computadora',
        component: RegistrarComputadoraPageComponent,
      },
      { path: 'ver-computadora', component: VerComputadorasPageComponent },
      {
        path: 'especificacion',
        component: EspecificacionProductoPageComponent,
      },
      {
        path: 'producto-detalles/:id',
        component: DetallesProductoPageComponent,
      },
      {
        path: 'lista-especificacion',
        component: EspecificacionListaPageComponent,
      },
      { path: 'perfil', component: PerfilAdminPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
