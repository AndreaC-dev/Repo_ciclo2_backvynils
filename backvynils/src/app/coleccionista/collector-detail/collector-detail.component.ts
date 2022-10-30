import { Component, Input, OnInit } from '@angular/core';
import { CollectorDetail } from '../collectorDetail'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicianService } from 'src/app/musician/musician.service';
import { ColeccionistaService } from 'src/app/coleccionista/coleccionista.service'
import { Musician } from 'src/app/musician/musician';
import { MusicianListComponent } from 'src/app/musician/musician-list/musician-list.component'

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
})
export class CollectorDetailComponent implements OnInit {
  @Input() collectorDetail: CollectorDetail;
  @Input() musicianList: MusicianListComponent;
  performerForm: FormGroup;
  listMusicians: Musician[];
  musicians: Musician[];


  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private collectorService: ColeccionistaService,
    private musicianService: MusicianService

  ) {
    this.performerForm = this.formBuilder.group({
      musicians: ['']
    });
  }


  getPerformers(): void {
    this.musicianService.getMusicians()
    .subscribe(musicians => {
      this.listMusicians = musicians;
    });
  }

  addPerformer(collectorID, musicianID) {
    const performerID = this.performerForm.get('musicians').value;
    this.collectorService.addPerformerToCollector(collectorID, performerID)
      .subscribe(() => {
        this.toastr.success('The musician was added successfully');
      });
    }

  ngOnInit() {
    this.getPerformers();
    this.performerForm;
    this.musicians = [];
  }
}
