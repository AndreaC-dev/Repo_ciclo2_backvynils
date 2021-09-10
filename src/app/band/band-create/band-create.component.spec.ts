import { async, inject, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BandCreateComponent } from './band-create.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BandService } from '../band.service';
import { FormBuilder } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import { Band } from '../band';
import faker from "faker";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('BandCreateComponent', () => {
  let injector: TestBed;
  let component: BandCreateComponent;
  let service: BandService;
  let httpMock: HttpTestingController;
  let formBuilder: FormBuilder;
  let mockService:ToastrModule;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpClientModule, ToastrModule.forRoot(),
        RouterTestingModule,
        RouterModule.forRoot([])],
      providers: [BandService,
    BandCreateComponent,
FormBuilder, {
  provide: ActivatedRoute,
  useValue: { snapshot: { paramMap: {get:(id:number)=>{id:1}}}}}],
      declarations: [ BandCreateComponent ]
    });
    injector=getTestBed();
    component=injector.get(BandCreateComponent);
    httpMock=injector.get(HttpTestingController);
    formBuilder= injector.get(FormBuilder);
    mockService=  injector.get(ToastrModule);
    injector.get(ActivatedRoute);
    injector.get(RouterModule);
  });

    afterEach(()=>{
      httpMock.verify();
    });

  it("Should createBand()", inject([BandCreateComponent],(component) => {
    let newBand = new Band (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());
    component.createBand(newBand);

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('POST');
    req.flush(newBand);

    expect(component).toBeTruthy();

}));

  it("Should cancelCreation()", () => {
    expect(component.cancelCreation()).toBe(undefined);

  });
  it('should ngOnInit()', inject([BandCreateComponent],(component)  => {
    component.ngOnInit(formBuilder);
    expect(formBuilder).toBeTruthy();
  }));
});
