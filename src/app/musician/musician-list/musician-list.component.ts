import { Component, OnInit } from '@angular/core';
import { MusicianService } from '../musician.service';
import { MusicianDetail } from '../musicianDetail';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.scss']
})
export class MusicianListComponent implements OnInit {

  constructor(private musicianService: MusicianService) { }
  musicians: Array<MusicianDetail>;
  selectedMusician: MusicianDetail;
  selected = false;

  getMusicians(): void {
    this.musicianService.getMusicians()
      .subscribe(musicians => 
        this.musicians = musicians);}

  onSelected(b: MusicianDetail): void {
    this.selected = true;
    this.selectedMusician = b;}

  ngOnInit() {
    this.getMusicians();}

}

