/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { MusicianDetailComponent } from './musician-detail.component';
import { HttpClientModule } from '@angular/common/http';
import faker from "faker";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Musician } from '.././musician';
import { MusicianService } from '../musician.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MusicianDetailComponent', () => {
  let component: MusicianDetailComponent;
  let fixture: ComponentFixture<MusicianDetailComponent>;
  let debug: DebugElement;
  let service: MusicianService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,ToastrModule.forRoot(),RouterTestingModule, 
        RouterModule.forRoot([]),HttpClientTestingModule],
      declarations: [ MusicianDetailComponent ],
      providers:[FormBuilder, MusicianDetailComponent,{
        provide: ActivatedRoute,
        useValue: { snapshot: { paramMap: {get:(id:number)=>{id:1}}}}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianDetailComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should strDate()', () => {
    let creationDate=faker.date.past().toLocaleString();
    expect(typeof(component.strToDate(creationDate))).toEqual('object');
  });
  it('should ngOnInit()', inject([MusicianDetailComponent],(component)  => {
    let newMusician = new Musician (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());
    component.ngOnInit(newMusician);
    expect(component).toBeTruthy();
  }));

  it("Should getMusicianDetail", inject([MusicianDetailComponent],(component) => {
    let newMusician = new Musician (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());
    component.getMusicianDetail(newMusician);
    expect(component).toBeTruthy();

}));

});
