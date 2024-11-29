import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; // Necesario para el filtro
import { MatDialog } from '@angular/material/dialog'; // Necesario para abrir el modal
import { UsuarioService } from 'src/app/services/UserService';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'telefono', 'correo', 'role', 'acciones'];

  constructor(private usuarioService: UsuarioService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => {
        console.log('Usuarios obtenidos:', usuarios); // Verificar que los datos estén llegando correctamente
        this.dataSource.data = usuarios;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

  // Abrir el modal para editar un usuario
  editarUsuario(id: number): void {
    const usuario = this.dataSource.data.find(u => u.id === id);

    // Abre el modal y pasa el usuario seleccionado
    const dialogRef = this.dialog.open(EditarUsuarioComponent, {
      width: '400px',
      data: usuario // Pasa los datos del usuario al modal
    });

    // Maneja la respuesta cuando el modal se cierra
    dialogRef.afterClosed().subscribe(updatedUser => {
      if (updatedUser) {
        // Si hubo cambios, actualiza la tabla
        this.dataSource.data = this.dataSource.data.map(u =>
          u.id === updatedUser.id ? updatedUser : u
        );
      }
    });
  }

  // Eliminar un usuario con confirmación mediante SweetAlert2
  eliminarUsuario(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(id).subscribe(() => {
          Swal.fire('¡Eliminado!', 'El usuario ha sido eliminado.', 'success');
          this.obtenerUsuarios(); // Actualiza la lista después de eliminar
        }, (error) => {
          Swal.fire('Error', 'No se pudo eliminar el usuario.', 'error');
        });
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
