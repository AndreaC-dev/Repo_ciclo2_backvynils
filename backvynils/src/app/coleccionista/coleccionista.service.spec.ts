import { TestBed, getTestBed } from "@angular/core/testing";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";

import { ColeccionistaService } from "./coleccionista.service";
import { Coleccionista } from "./coleccionista";
import { environment } from "../../environments/environment";
import {CollectorPerformers} from './collectorPerformers'

describe("CourseService", () => {
 let injector: TestBed;
 let service: ColeccionistaService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "collectors";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [ColeccionistaService],
   });

   injector = getTestBed();
   service = injector.get(ColeccionistaService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getColeccionistas() should return 10 records", () => {
   let mockPosts: Coleccionista[] = [];
   let collectorPerformers: Array<CollectorPerformers>;
   collectorPerformers = [faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName()]

   for (let i = 0; i < 10; i++) {
     let coleccionista = new Coleccionista(
       faker.datatype.number(),
       faker.name.findName(),
       collectorPerformers,
       faker.name.findName()
     );
     mockPosts.push(coleccionista);
   }

   service.getColeccionistas().subscribe((coleccionistas) => {
     expect(coleccionistas.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
