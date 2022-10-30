import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { Album } from "../album";
import { AlbumService } from "../album.service";

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {
  albumForm: FormGroup= this.formBuilder.group(
    {
    name: ["", [Validators.required, Validators.minLength(2)]],
    cover: ["",[Validators.required, Validators.minLength(7)]],
    genre: ["", [Validators.required, Validators.minLength(2)]],
    releaseDate: ["", [Validators.required, (c: AbstractControl) => (new Date(c.value).getTime() > Date.now() ? { invalid: true } : null)]],
    }
  );;
  albums: Album[];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private albumService: AlbumService,
  ) { }

  createAlbum(newAlbum: Album) {
    this.showSuccess(newAlbum);
    this.albumService.createAlbum(newAlbum).subscribe(newAlbum => {
    this.showSuccess(newAlbum);
    });
    console.warn(`The Album ${newAlbum} was created`);
    this.albumForm.reset();
  }
  showSuccess(album: Album) {
    this.toastr.success('Sucessfully created!', `Album ${album.name}`, { "progressBar": true, timeOut: 4000 });
  }
  cancelCreation() {
    this.albumForm.reset();
  }

  ngOnInit() {
    this.albumForm;
  }

}
