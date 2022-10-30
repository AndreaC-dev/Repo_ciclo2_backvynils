import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandListComponent } from './band-list/band-list.component';
import { BandDetailComponent } from './band-detail/band-detail.component';
import { BandCreateComponent } from './band-create/band-create.component';

const routes: Routes = [{
  path: 'bands',
  children: [
    {
      path: 'create',
    component: BandCreateComponent
    },
    {
      path: 'list',
      component: BandListComponent
    },
    {
      path: ':id',
      component: BandDetailComponent,
      runGuardsAndResolvers: 'always'
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandRoutingModule { }
