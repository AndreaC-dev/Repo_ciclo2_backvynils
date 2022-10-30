import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Musician } from 'src/app/musician/musician';
import { MusicianService } from 'src/app/musician/musician.service';
import { BandService } from '../band.service';
import {BandDetail} from '../bandDetail'

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent implements OnInit {
  musicianForm: FormGroup;
  musicians: Musician[];
  listMusicians: Musician[];
  allMusicians: Musician[];

  @Input() bandDetail: BandDetail;

  constructor(
      private bandService: BandService,
      private route: ActivatedRoute,
      private musicianService: MusicianService,
      private toastr: ToastrService,
      private router: Router,
      private formBuilder: FormBuilder,
  ) {
      this.musicianForm = this.formBuilder.group({
        musicians:['']
      });}
      
   bandId: number;
   getBandDetail(): void {
    this.bandService.getBandDetail(this.bandId)
      .subscribe(bandDetail => {
        this.bandDetail = bandDetail;
      });}

  strToDate(creationDate: string): Date {
    const dateNoTime: string[] = creationDate.split('T');
    return new Date(dateNoTime[0]);
  }
  getMusicians(): void {
    this.musicianService.getMusicians().subscribe(musicians => {
      this.allMusicians = musicians;
      this.isIn()})}

  isIn():void{
    this.listMusicians=[];
    var dato:boolean;
      this.allMusicians.forEach(element => {
        dato=false;
      this.bandDetail.musicians.forEach((element3)=> {
      if (element3.id===(element.id)){
        dato=true;}})
        if(dato===false){
          this.listMusicians.push(element);}})}

  buscarId(pal, list) {
    for (const i of list) {
      if (i.name === pal) {
        return i;}}}

  addMusician(band:BandDetail) {
    const m = this.musicianForm.get('musicians').value;
    var musician=this.buscarId(m, this.allMusicians);
    this.bandService.addingMusician(this.bandDetail, musician)
    .subscribe(band => {
      this.toastr.success('The musician was added successfully');
      this.router.navigate([`/bands/${this.bandDetail.id}`]);});
  }

  ngOnInit(): void {
    if (this.bandDetail === undefined) {
      this.bandId = +this.route.snapshot.paramMap.get('id');
      this.getBandDetail();} 
    
    this.getMusicians();
    this.musicians = [];}
  
  }


  