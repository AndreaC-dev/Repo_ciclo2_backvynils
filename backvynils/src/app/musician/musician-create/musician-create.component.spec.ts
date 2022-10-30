import { async, inject, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { MusicianCreateComponent } from './musician-create.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MusicianService } from '../musician.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import { Musician } from '../musician';
import faker from "faker";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MusicianCreateComponent', () => {
  let injector: TestBed;
  let component: MusicianCreateComponent;
  let service: MusicianService;
  let httpMock: HttpTestingController;
  let formBuilder: FormBuilder;
  let mockService:ToastrModule;
  let musicianForm: FormGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpClientModule, ToastrModule.forRoot(),
        RouterTestingModule, 
        RouterModule.forRoot([])],
      providers: [MusicianService,
    MusicianCreateComponent,
FormBuilder, {
  provide: ActivatedRoute,
  useValue: { snapshot: { paramMap: {get:(id:number)=>{id:1}}}}}],
      declarations: [ MusicianCreateComponent ]
    });
    injector=getTestBed();
    component=injector.get(MusicianCreateComponent);
    httpMock=injector.get(HttpTestingController);
    formBuilder= injector.get(FormBuilder);
    mockService=  injector.get(ToastrModule);
    injector.get(ActivatedRoute);
    injector.get(RouterModule);
  });

    afterEach(()=>{
      httpMock.verify();
    });

  it('should create', inject([MusicianCreateComponent],(component) => {
    expect(component).toBeTruthy();
  }))
  it("Should createMusician", inject([MusicianCreateComponent],(component) => {
    let newMusician = new Musician (faker.datatype.number(),faker.name.findName(), faker.internet.url(),faker.random.word(),faker.date.past());
    component.createMusician(newMusician);

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('POST');
    req.flush(newMusician);

    expect(component).toBeTruthy();

}));
it("Should cancelCreation()", () => {
    
  expect(component.cancelCreation()).toBe(undefined);

});
  
});