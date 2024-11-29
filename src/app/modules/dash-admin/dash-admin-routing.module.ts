import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashTablaComponent } from './components/dash-tabla/dash-tabla.component';
import { UserGuard } from 'src/app/guards/UserGuard';
import { AdminGuard } from 'src/app/guards/AdminGuard';
import { InventoryManagerGuard } from 'src/app/guards/gestionUsuarios';
import { ListaUsuariosComponent } from './components-gestionUsuarios/lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: DashTablaComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'gestion-usuarios',  // Ruta para el rol GESTION_USUARIO
    component: ListaUsuariosComponent,  // O el componente que maneje esta sección
    canActivate: [InventoryManagerGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAdminRoutingModule { }
