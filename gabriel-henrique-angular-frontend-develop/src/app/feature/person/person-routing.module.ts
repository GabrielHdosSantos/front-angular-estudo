import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [{
  path: '', component: ViewComponent,
},
{
  path: 'edit',
  children: [
    {
      path: ":id",
      component: EditComponent
    }
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
