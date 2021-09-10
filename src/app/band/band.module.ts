import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{BandListComponent} from './band-list/band-list.component';
import {BandDetailComponent} from './band-detail/band-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BandRoutingModule } from './band-routing.module';
import { BandService } from './band.service';
import {BandCreateComponent} from './band-create/band-create.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    BandRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    FormsModule,
  ],
  declarations: [BandListComponent,
  BandDetailComponent, 
  BandCreateComponent],
  
  exports: [BandListComponent,
  BandCreateComponent],
  
  providers: [BandService]
})
export class BandModule { }
