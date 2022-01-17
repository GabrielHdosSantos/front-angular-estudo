import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { AnimalsService } from 'src/app/core/animals/animals.service';
import { EditComponent } from '../animals/edit/edit.component'

import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

@Injectable()
export class AnimalsDataResolver implements Resolve<any> {
  constructor(private animalsService: AnimalsService) {}

  resolve() {
    return this.animalsService.getAll();
  }
}

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    resolve: {
      animals: AnimalsDataResolver,
    },
  },
  {
    path: 'editar',
    children: [
      {
        path: ':id',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AnimalsDataResolver],
})
export class AnimalsRoutingModule {}
