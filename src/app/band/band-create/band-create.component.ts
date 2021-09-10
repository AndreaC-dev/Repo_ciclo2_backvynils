import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Band } from '../band';
import {BandService} from '../band.service'

@Component({
  selector: 'app-band-create',
  templateUrl: './band-create.component.html',
  styleUrls: ['./band-create.component.scss']
})
export class BandCreateComponent implements OnInit {
  bandForm: FormGroup= this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    image: ["",[Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*')]],
    description: ["", [Validators.required, Validators.minLength(10)]],
    creationDate: ["", [Validators.required, (c: AbstractControl) => (new Date(c.value).getTime() > Date.now() ? { invalid: true } : null)]],
    });;
  bands: Band[];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private bandService: BandService,
    private router: Router,
  ) { }

  createBand(newBand: Band) {
    this.bandService.createBand(newBand).subscribe(newBand => {
      this.toastr.success('Sucessfully created!', `Band ${newBand.name}`);
      this.router.navigate(['/bands/list']);
    });}

  cancelCreation() {
    this.toastr.warning('The band wasn\'t created', 'Band creation');
    this.router.navigate(['/bands/list']);}

  ngOnInit() {
    this.bandForm;}}

