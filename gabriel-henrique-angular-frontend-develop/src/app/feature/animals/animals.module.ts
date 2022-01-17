import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [FormComponent, ListComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    ReactiveFormsModule

  ]
})
export class AnimalsModule { }
