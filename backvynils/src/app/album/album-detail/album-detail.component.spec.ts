/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AlbumDetailComponent } from './album-detail.component';
import { Comment } from "../comment";
import { compileComponentFromMetadata } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('AlbumDetailComponent', () => {
  let comment: Comment = new Comment(10, "Hola", 10);
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,ToastrModule.forRoot(),RouterTestingModule,
        RouterModule.forRoot([])],
      declarations: [ AlbumDetailComponent ],
      providers:[FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should create Comment", () => {
    component.createComment(comment);
  });
});
