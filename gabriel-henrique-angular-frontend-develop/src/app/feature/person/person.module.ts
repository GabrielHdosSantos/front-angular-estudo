import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';



@NgModule({
  declarations: [ListComponent, CadastroComponent, ViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ],
  exports: []

})
export class PersonModule { }
