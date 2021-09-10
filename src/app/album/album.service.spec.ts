import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClientModule } from '@angular/common/http';
import faker from "faker";

import { AlbumService } from './album.service';
import { Album } from "./album";

describe('Service: Album', () => {
  let injector: TestBed;
  let service: AlbumService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpClientModule],
      providers: [AlbumService]
    });
    injector=getTestBed();
    service=injector.get(AlbumService);
    httpMock=injector.get(HttpTestingController);
  });
  afterEach(()=>{
    httpMock.verify();
  });

  it('should create service', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));

  it('getAlbums() should return 10 records', () => {

    let mockAlbum: Album[] = [];

    for (let i = 1; i < 11; i++) {

      let album = new Album (i,
        faker.name.findName(),
        faker.image.imageUrl(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      mockAlbum.push(album);
    }

    service.getAlbums().subscribe((albums) => {
      expect(albums.length).toBe(10);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockAlbum);
  });
});
