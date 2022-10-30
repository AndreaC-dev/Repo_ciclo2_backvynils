import { Component, OnInit, Input} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { AlbumDetail } from "../albumDetail";
import { Comment } from "../comment";
import { AlbumService } from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  commentForm: FormGroup= this.formBuilder.group(
    {
    description: ["", [Validators.required, Validators.minLength(2)]],
    }
  );;
  comments: Comment[];

  @Input() albumDetail: AlbumDetail;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private albumService: AlbumService,
  ) { }

  createComment(newComment: Comment) {
    this.showSuccess(newComment);
    this.albumService.createComment(newComment).subscribe(newComment => {
    this.showSuccess(newComment);
    });
    this.commentForm.reset();
  }
  showSuccess(comment: Comment) {
    this.toastr.success('Sucessfully created!', `Comment ${comment.description}`, { "progressBar": true, timeOut: 4000 });
  }
  cancelCreation() {
    this.commentForm.reset();
  }

  ngOnInit() {
    this.commentForm;
  }

}
