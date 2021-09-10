import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumListarComponent } from './album-listar/album-listar.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from "./album-create/album-create.component";


const routes: Routes = [{
  path: 'albums',
  children: [
    {
      path: 'create',
      component: AlbumCreateComponent
    },
    {
      path: 'list',
      component: AlbumListarComponent
    },
    {
      path: ':id',
      component: AlbumDetailComponent,
      runGuardsAndResolvers: 'always'
    },


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
