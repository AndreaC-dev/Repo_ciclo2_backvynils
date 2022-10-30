/* tslint:disable:no-unused-variable */

import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { MusicianService } from './musician.service';
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
 
 import faker from "faker";
 import {MusicianDetail} from './musicianDetail'
import { Musician } from './musician';
 

describe('Service: Musician', () => {
  let injector: TestBed;
  let service: MusicianService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MusicianService],
    });
    injector = getTestBed();
    service = injector.get(MusicianService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create service', inject([MusicianService], () => {
    expect(service).toBeTruthy();
  }));

  it('getMusicians() should return 10 records', () => {

    let mockMusician: MusicianDetail[] = [];

    for (let i = 1; i < 11; i++) {

      let musician = new MusicianDetail (faker.name.findName());
      mockMusician.push(musician);
    }

    service.getMusicians().subscribe((musician) => {
      expect(musician.length).toBe(10);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockMusician);
  });
  it('createBands() should return 1 record', () => {

    let newMusician = new Musician (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());

    service.createMusician(newMusician).subscribe((musicians) => {
      expect(newMusician.id).toBe(newMusician.id);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('POST');
    req.flush(newMusician);
  });
  it('getMusicianDetail() should return the Id', () => {

    let newMusician = new Musician (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());

    service.getMusicianDetail(newMusician.id).subscribe((musicians) => {
      expect(newMusician.id).toBe(newMusician.id);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(newMusician);
  });

});
