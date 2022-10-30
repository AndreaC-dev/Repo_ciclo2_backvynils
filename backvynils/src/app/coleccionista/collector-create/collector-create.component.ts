import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Coleccionista } from '../coleccionista';
import {ColeccionistaService} from '../coleccionista.service'

@Component({
  selector: 'app-collector-create',
  templateUrl: './collector-create.component.html',
  styleUrls: ['./collector-create.component.scss']
})
export class CollectorCreateComponent implements OnInit {
  collectorForm: FormGroup= this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    telephone: ["",[Validators.required, Validators.minLength(7), Validators.pattern( "^((\\+91-?)|0)?[0-9]{10}$")]],
    email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });;
  collectors: Coleccionista[];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private coleccionistaService: ColeccionistaService,
    private router: Router,
  ) { }

  createCollector(newColeccionista: Coleccionista) {
    this.coleccionistaService.createColeccionista(newColeccionista).subscribe(newColeccionista => {
      this.toastr.success('Sucessfully created!', `Collector ${newColeccionista.name}`);
      this.router.navigate(['/coleccionista/list']);
    });}

  cancelCreation() {
    this.toastr.warning('The collector wasn\'t created', 'Collector creation');
    this.router.navigate(['/collector/list']);}

  ngOnInit() {
    this.collectorForm;
  }
}
