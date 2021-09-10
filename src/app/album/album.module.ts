import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AlbumListarComponent } from "./album-listar/album-listar.component";
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from "./album-create/album-create.component";
import { AlbumService } from "./album.service";

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    AlbumRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AlbumListarComponent,
    AlbumDetailComponent,
    AlbumCreateComponent,
  ],
  exports: [
    AlbumListarComponent,
    AlbumCreateComponent,
  ],
  providers: [AlbumService]
})
export class AlbumModule { }
