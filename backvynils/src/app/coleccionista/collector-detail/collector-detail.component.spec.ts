/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CollectorDetailComponent } from './collector-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { FormBuilder } from '@angular/forms';

describe('BandDetailComponent', () => {
  let component: CollectorDetailComponent;
  let fixture: ComponentFixture<CollectorDetailComponent>;
  let debug: DebugElement;
  let musicians = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,ToastrModule.forRoot(),RouterTestingModule,
        RouterModule.forRoot([])],
      declarations: [ CollectorDetailComponent ],
      providers:[FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorDetailComponent);
    component = fixture.componentInstance;
  });

  it("Should getPerformers()", () => {
    component.listMusicians = musicians;
    component.getPerformers();
  });

});
