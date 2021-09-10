/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicianListComponent } from './musician-list.component';
import { HttpClientModule } from '@angular/common/http';
import {Musician} from '../musician'


describe('MusicianListomponent', () => {
  let component: MusicianListComponent;
  let fixture: ComponentFixture<MusicianListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MusicianListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianListComponent);
    component = fixture.componentInstance;
    component.musicians = [new Musician ()];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an h1 tag", () => {
    expect(debug.query(By.css("h1")).nativeElement.innerText).toBe("Musicians");
  })

  it("Should onSelected", () => {
    const musician: Musician = new Musician()
    component.onSelected(musician);
    expect(component.selectedMusician).toBe(musician)

});
  

});