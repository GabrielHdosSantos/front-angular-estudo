import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [ListComponent, CadastroComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, CadastroComponent]

})
export class PersonModule { }
