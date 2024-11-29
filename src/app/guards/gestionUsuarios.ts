import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';  // Cambia la ruta si es necesario
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InventoryManagerGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Verificar si el usuario tiene el rol 'INVENTORY_MANAGER'
    return this.authService.getRole().pipe(
      map(role => {
        if (role === 'GESTION_USUARIO') {
          return true;  // Si tiene el rol 'INVENTORY_MANAGER', permite el acceso
        } else {
          // Si no tiene el rol, redirige a la página de 'no-permission' o muestra un mensaje
          Swal.fire('Acceso denegado', 'No tienes permisos para acceder a esta página', 'error');
          this.router.navigate(['/no-permission']);
          return false;
        }
      }),
      catchError(() => {
        Swal.fire('Acceso denegado', 'No tienes permisos para acceder a esta página', 'error');
        this.router.navigate(['/no-permission']);
        return of(false);
      })
    );
  }
}
