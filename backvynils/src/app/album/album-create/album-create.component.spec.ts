import { async, inject, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import faker from "faker";

import { AlbumCreateComponent } from "./album-create.component";
import { Album } from "../album";
import { Track } from "../track";
import { Band } from "../../band/band";
import { Comment } from "../comment";
import { AlbumService } from "../album.service";
import { keyframes } from '@angular/animations';

describe('AlbumCreateComponent', () => {
  let injector: TestBed;
  let component: AlbumCreateComponent;
  let service: AlbumService;
  let httpMock: HttpTestingController;
  let formBuilder: FormBuilder;
  let mockService:ToastrModule;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpClientModule, ToastrModule.forRoot()],
      providers: [
        AlbumService,
        AlbumCreateComponent,
        FormBuilder
      ],
      declarations: [
        AlbumCreateComponent
      ]
    });
    injector=getTestBed();
    component=injector.get(AlbumCreateComponent);
    httpMock=injector.get(HttpTestingController);
    formBuilder= injector.get(FormBuilder);
    mockService=  injector.get(ToastrModule);
  });

    afterEach(()=>{
      httpMock.verify();
    });

  it('should create', inject([AlbumCreateComponent],(component) => {
    expect(component).toBeTruthy();
  }))
  it("Should createAlbum()", inject([AlbumCreateComponent],(component) => {

    let newAlbum = new Album (
      faker.datatype.number(),
      faker.name.findName(),
      faker.internet.url(),
      faker.date.past(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      [new Track(faker.random.word(), faker.random.word())],
      new Band (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past()),
      [new Comment(faker.datatype.number(), faker.random.word(), faker.datatype.number())]
      );
    component.createAlbum(newAlbum);

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('POST');
    req.flush(newAlbum);

    expect(component).toBeTruthy();

}));
});

