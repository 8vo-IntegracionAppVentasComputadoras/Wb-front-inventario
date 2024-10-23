import { NgModule } from '@angular/core';
import { PerfilPageComponent } from './home/pages/perfil/perfil.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [PerfilPageComponent],
  declarations: [PerfilPageComponent],
  providers: [],
})
export class SharedModule { }
