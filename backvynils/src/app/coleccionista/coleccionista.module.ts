import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColeccionistaListarComponent } from './coleccionista-listar/coleccionista-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { ColeccionistaRoutingModule } from './coleccionista-routing.module';
import { CollectorDetail } from './collectorDetail';
import {CollectorDetailComponent} from './collector-detail/collector-detail.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CollectorCreateComponent} from './collector-create/collector-create.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ColeccionistaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [ColeccionistaListarComponent, CollectorDetailComponent, CollectorCreateComponent],
  exports: [ColeccionistaListarComponent,  CollectorCreateComponent]
})
export class ColeccionistaModule { }
