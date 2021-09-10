import { Component, OnInit } from '@angular/core';
import { BandService } from '../band.service';
import { BandDetail } from '../bandDetail';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent implements OnInit {

  constructor(private bandService: BandService) { }
  bands: Array<BandDetail>;
  selectedBand: BandDetail;
  selected = false;

  getBands(): void {
    this.bandService.getBands()
      .subscribe(bands => 
        this.bands = bands);}

  onSelected(b: BandDetail): void {
    this.selected = true;
    this.selectedBand = b;}

  ngOnInit() {
    this.getBands();}
  }
