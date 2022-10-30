import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicianListComponent } from './musician-list/musician-list.component';
import { MusicianDetailComponent } from './musician-detail/musician-detail.component';
import { MusicianCreateComponent } from './musician-create/musician-create.component';


const routes: Routes = [{
  path: 'musicians',
  children: [
    {
      path: 'create',
    component: MusicianCreateComponent,
    runGuardsAndResolvers: 'always'
    },
    {
      path: 'list',
      component: MusicianListComponent
    },
    {
      path: ':id',
      component: MusicianDetailComponent,
      runGuardsAndResolvers: 'always'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicianRoutingModule { }