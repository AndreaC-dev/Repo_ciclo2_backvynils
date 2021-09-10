import { Component, Input } from '@angular/core';
import {MusicianDetail} from '../musicianDetail'
import { ActivatedRoute } from '@angular/router';
import { MusicianService } from '../musician.service';

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.scss']
})
export class MusicianDetailComponent {

  @Input() musicianDetail: MusicianDetail;

  constructor(
    private route: ActivatedRoute,
    private musicianService: MusicianService
  ) { }

  musicianId: number;
  getMusicianDetail(): void {
    this.musicianService.getMusicianDetail(this.musicianId)
      .subscribe(musicianDetail => {
        this.musicianDetail = musicianDetail;
      });}
ngOnInit() {
  if (this.musicianDetail === undefined) {
    this.musicianId = +this.route.snapshot.paramMap.get('id');
    this.getMusicianDetail();}}

  strToDate(birthDate: string): Date {
    const dateNoTime: string = birthDate.split('T')[0];
    return new Date(dateNoTime);}}

