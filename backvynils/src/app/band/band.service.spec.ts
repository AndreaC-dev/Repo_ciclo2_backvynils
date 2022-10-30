/* tslint:disable:no-unused-variable */

import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { BandService } from './band.service';
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
 
 import faker from "faker";
 import {BandDetail} from './bandDetail'
 import {Band} from './band'
 

describe('Service: Band', () => {
  let injector: TestBed;
  let service: BandService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BandService],
    });
    injector = getTestBed();
    service = injector.get(BandService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create service', inject([BandService], () => {
    expect(service).toBeTruthy();
  }));

  it('getBands() should return 10 records', () => {

    let mockBand: BandDetail[] = [];
    var numberOfRecords=11;
    for (let i = 1; i < numberOfRecords; i++) {
      let band = new BandDetail (faker.name.findName());
      mockBand.push(band);
    }

    service.getBands().subscribe((bands) => {
      expect(bands.length).toBe(10);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockBand);
  });
  it('createBands() should return 1 record', () => {

    let newBand = new Band (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());

    service.createBand(newBand).subscribe((bands) => {
      expect(newBand.id).toBe(newBand.id);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('POST');
    req.flush(newBand);
  });
  it('getBandDetail() should return the Id', () => {

    let newBand = new Band (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());

    service.getBandDetail(newBand.id).subscribe((bands) => {
      expect(newBand.id).toBe(newBand.id);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(newBand);
  });
  it('addingMusician() should return 1 record', () => {

    let newBand = new Band (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());
    let newMusician = new Band (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());
    service.addingMusician(newBand,newMusician).subscribe((bands) => {
      expect(newBand).toBe(newBand);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('POST');
    req.flush(newBand);
  });
});
