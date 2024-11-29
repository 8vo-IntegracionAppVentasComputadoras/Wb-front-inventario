import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import baserUrl from '../config/helper';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {

  private apiBaseUrl = `${baserUrl}/api/reportes`;

  constructor(private http: HttpClient) {}

  descargarReporteProductos(): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'application/pdf');

    // Realiza la solicitud GET al endpoint de productos
    return this.http.get(`${this.apiBaseUrl}/productos`, {
      headers: headers,
      responseType: 'blob' // Especifica que la respuesta será un archivo binario (PDF)
    }).pipe(
      catchError(error => {
        // Proporcionar más detalles en el error para la depuración
        console.error('Error al generar el reporte:', error);
        if (error.status === 500) {
          alert('Hubo un error en el servidor al generar el reporte. Por favor, revisa los logs del servidor.');
        }
        throw error;  // Lanza el error para que el componente lo maneje
      })
    );
  }
}
