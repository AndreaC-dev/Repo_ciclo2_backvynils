/* tslint:disable:no-unused-variable */
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ColeccionistaListarComponent } from './coleccionista-listar.component';
import { HttpClientModule } from '@angular/common/http';
import {Coleccionista} from '../coleccionista'
import {CollectorPerformers} from '../collectorPerformers'
import faker from "faker";

describe('ColeccionistarComponent', () => {
  let component: ColeccionistaListarComponent;
  let fixture: ComponentFixture<ColeccionistaListarComponent>;
  let debug: DebugElement;
  let collectorPerformers: Array<CollectorPerformers>;
  let coleccionistas: Array<Coleccionista>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ColeccionistaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionistaListarComponent);
    component = fixture.componentInstance;
    collectorPerformers = [faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName()]
    component.coleccionistas = [new Coleccionista(faker.datatype.number() ,  faker.name.findName(), collectorPerformers, faker.name.findName())];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h1 tag", () => {
    expect(debug.query(By.css("h1")).nativeElement.innerText).toBe("Collectors");
  })

  it("Should onSelected", () => {
    const coleccionista: Coleccionista = new Coleccionista(faker.datatype.number(), faker.name.findName(), collectorPerformers, faker.name.findName())
    component.onSelected(coleccionista);
    expect(component.selectedCollector).toBe(coleccionista)
  })

  it("Should getColeccionistaList()",() => {
    coleccionistas = [new Coleccionista(faker.datatype.number(), faker.name.findName(), collectorPerformers, faker.name.findName())];
  })

});
