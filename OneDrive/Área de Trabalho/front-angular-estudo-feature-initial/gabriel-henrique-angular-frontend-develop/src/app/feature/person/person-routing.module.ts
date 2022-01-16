import { Injectable, NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { PeopleService } from 'src/app/core/people/people.service';
import { EditComponent } from '../../edit/edit.component';
import { ViewComponent } from './view/view.component';

@Injectable()
export class PeopleDataResolver implements Resolve<any> {
  constructor(private peopleService: PeopleService) {}

  resolve() {
    return this.peopleService.findAll();
  }
}

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    resolve: {
      people: PeopleDataResolver,
    },
  },
  {
    path: 'edit',
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
  providers: [PeopleDataResolver],
})
export class PersonRoutingModule {}
