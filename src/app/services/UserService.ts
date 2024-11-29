import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import baserUrl from '../config/helper';
import { AuthService } from './auth.service';

// Definir el modelo de usuario (simplificado)
export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
}
export interface UsuarioDTO {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  role: string;  // Asegúrate de tener esta propiedad si la estás utilizando
}

export interface UsuarioResponseDTO {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  role: string; // Asumiendo que el rol también es parte de la respuesta
}


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = `${baserUrl}/usuarios`; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient,private authService: AuthService) {}

  // Obtener la lista de usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/listar`);
  }

  // Eliminar un usuario
  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }

  editarUsuario(id: number, usuarioDTO: UsuarioDTO): Observable<any> {
    const url = `http://localhost:8080/usuarios/editar/${id}`;
    console.log('URL de la solicitud PUT en el servicio:', url); // Verifica la URL en el servicio

    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // Asegúrate de que el token se esté enviando correctamente
    });

    console.log('Datos a enviar al backend:', usuarioDTO); // Verifica los datos que se están enviando

    return this.http.put<any>(url, usuarioDTO, { headers }).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error); // Verifica el error si es que se presenta
        throw error;
      })
    );
  }


  // Agregar un usuario
  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/register`, usuario);
  }
}
