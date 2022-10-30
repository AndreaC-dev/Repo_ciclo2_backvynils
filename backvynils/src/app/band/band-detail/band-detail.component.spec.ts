/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { BandDetailComponent } from './band-detail.component';
import { HttpClientModule } from '@angular/common/http';
import faker from "faker";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Band } from '../band';
import { MusicianService } from 'src/app/musician/musician.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('BandDetailComponent', () => {
  let component: BandDetailComponent;
  let fixture: ComponentFixture<BandDetailComponent>;
  let debug: DebugElement;
  let service: MusicianService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,ToastrModule.forRoot(),RouterTestingModule,
        RouterModule.forRoot([])],
      declarations: [ BandDetailComponent ],
      providers:[FormBuilder, BandDetailComponent, {
        provide: ActivatedRoute,
        useValue: { snapshot: { paramMap: {get:(id:number)=>{id:1}}}}}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BandDetailComponent);
    component = fixture.componentInstance;
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should strDate()', () => {
    let creationDate=faker.date.past().toLocaleString();
    expect(typeof(component.strToDate(creationDate))).toEqual('object');
  });
  it('should ngOnInit()', inject([BandDetailComponent],(component)  => {
    let newBand = new Band (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());
    component.ngOnInit(newBand);
    expect(component).toBeTruthy();
  }));
  it("Should getBandDetail", inject([BandDetailComponent],(component) => {
    let newBand = new Band (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());
    component.getBandDetail(newBand);
    expect(component).toBeTruthy();
  }));

  it("Should isIn()", inject([BandDetailComponent],(component) => {
    let listMusicians = [];
    expect(component).toBeTruthy();
  }));


  it("Should buscarId", inject([BandDetailComponent],(component) => {
    let mockBand: Band[] = [];
    var numberOfRecords=3;
    for (let i = 1; i < numberOfRecords; i++) {
      let newBand = new Band (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());
      mockBand.push(newBand);
    }
    let m=mockBand[0];
    let f=component.buscarId(m.name,mockBand)

    expect(f.id).toBe(m.id);

  }));
  it("Should addMusician", inject([BandDetailComponent],(component) => {
    expect(component).toBeTruthy();

  }));

});
