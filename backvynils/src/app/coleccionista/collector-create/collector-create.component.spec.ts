/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectorCreateComponent } from './collector-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Coleccionista } from '../coleccionista'
import { CollectorPerformers } from '../collectorPerformers'

describe('CollectorCreateComponent', () => {
  let component: CollectorCreateComponent;
  let fixture: ComponentFixture<CollectorCreateComponent>;
  let collectorPerformers: CollectorPerformers = new CollectorPerformers(10, 'Daniel', 'imagen.jpg', 'descripcion', '26/04/90');
  let coleccionista: Coleccionista = new Coleccionista(10, "Daniel", [collectorPerformers] , "David Bowie")
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,ToastrModule.forRoot(),RouterTestingModule,
        RouterModule.forRoot([])],
      declarations: [ CollectorCreateComponent ],
      providers:[FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should createCollector", () => {
    component.createCollector(coleccionista);
  });
});
