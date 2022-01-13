import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ListComponent, CadastroComponent, ViewComponent],
  imports: [
    CommonModule
  ],
  exports: [ViewComponent]

})
export class PersonModule { }
