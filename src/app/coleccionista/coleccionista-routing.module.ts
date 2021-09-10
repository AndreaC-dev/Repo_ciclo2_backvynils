import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColeccionistaListarComponent } from './coleccionista-listar/coleccionista-listar.component';
import { CollectorDetailComponent } from './collector-detail/collector-detail.component';
import { CollectorCreateComponent } from './collector-create/collector-create.component'

const routes: Routes = [{
  path: 'collectors',
  children: [
    {
      path: 'create',
      component: CollectorCreateComponent
    },
    {
      path: 'list',
      component: ColeccionistaListarComponent
    },
    {
      path: ':id',
      component: CollectorDetailComponent,
      runGuardsAndResolvers: 'always'
    },


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColeccionistaRoutingModule { }
