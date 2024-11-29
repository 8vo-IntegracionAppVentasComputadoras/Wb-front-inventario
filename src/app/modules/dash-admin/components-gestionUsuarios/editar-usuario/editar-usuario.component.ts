import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioDTO, UsuarioService } from 'src/app/services/UserService';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  usuario: UsuarioDTO = {
    id: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    role: 'USER' // Este campo no se edita
  };

  constructor(
    public dialogRef: MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibe los datos del usuario en el modal
    private usuarioService: UsuarioService
  ) {
    // Inicializar usuario con los datos que vienen del componente padre
    this.usuario = { ...data }; // 'data' contiene los datos del usuario que se va a editar
  }

  guardarCambios(): void {
    const idUsuario = Number(this.usuario.id);

    // Log para verificar si el ID es válido
    console.log('ID del usuario a editar:', idUsuario);

    if (!idUsuario || isNaN(idUsuario)) {
      alert('ID de usuario no válido');
      return;
    }

    // Crear el objeto de usuario con los cambios que se desean hacer
    const cambios: UsuarioDTO = {
      id: idUsuario,
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellido,
      telefono: this.usuario.telefono,
      correo: this.usuario.correo,
      role: this.data.role // El rol no se edita, se conserva el rol original
    };

    // Log para ver los datos antes de enviarlos
    console.log('Datos del usuario a editar:', cambios);

    // Verifica la URL que se va a llamar
    const url = `http://localhost:8080/usuarios/editar/${idUsuario}`;
    console.log('URL de la solicitud PUT:', url);

    // Llamar al servicio para editar el usuario
    this.usuarioService.editarUsuario(idUsuario, cambios).subscribe(
      (response) => {
        console.log('Usuario actualizado:', response);
        this.dialogRef.close(true); // Cerrar el modal y pasar los cambios
      },
      (error) => {
        console.error('Error al editar el usuario', error);
        alert('Error al editar el usuario, por favor intente nuevamente.');
      }
    );
  }


  cancelar(): void {
    this.dialogRef.close(false); // Cerrar el modal sin guardar cambios
  }
}
