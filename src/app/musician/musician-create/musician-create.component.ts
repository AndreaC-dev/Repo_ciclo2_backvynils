import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Musician } from '../musician';
import {MusicianService} from '../musician.service';

@Component({
  selector: 'app-musician-create',
  templateUrl: './musician-create.component.html',
  styleUrls: ['./musician-create.component.scss']
})  
export class MusicianCreateComponent implements OnInit {
    musicianForm: FormGroup=this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(5)]],
    image: ["",[Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*')]],
    description: ["", [Validators.required, Validators.minLength(10)]],
    birthDate: ["", [Validators.required, (c: AbstractControl) => (new Date(c.value).getTime() > Date.now() ? { invalid: true } : null)]],
    });
  musicians: Musician[];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private musicianService: MusicianService,
    private router: Router,
  ) { 
  }
  createMusician(newMusician: Musician) {
    this.musicianService.createMusician(newMusician).subscribe(newMusician => {
      this.toastr.success('Sucessfully created!', `Musician ${newMusician.name}`);
      this.router.navigate(['/musicians/list']);
    });}

  cancelCreation() {
    this.toastr.warning('The musician wasn\'t created', 'Musician creation');
    this.router.navigate(['/musicians/list']);}
  
  ngOnInit() {
    this.musicianForm;
  }}
