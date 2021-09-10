import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicianListComponent} from './musician-list/musician-list.component';
import {MusicianDetailComponent} from './musician-detail/musician-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MusicianRoutingModule } from './musician-routing.module';
import { MusicianService } from './musician.service';
import {MusicianCreateComponent} from './musician-create/musician-create.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MusicianRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MusicianListComponent,
    MusicianDetailComponent,
  MusicianCreateComponent],

  exports: [MusicianListComponent, 
    MusicianCreateComponent],
    
  providers: [MusicianService]
})
export class MusicianModule { }
