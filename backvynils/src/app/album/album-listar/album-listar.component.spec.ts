/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AlbumListarComponent } from './album-listar.component';
import { Album } from '../album';

describe('AlbumListarComponent', () => {
  let component: AlbumListarComponent;
  let fixture: ComponentFixture<AlbumListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ AlbumListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Should onSelected", () => {
    const album: Album = new Album()
    component.onSelected(album);
    expect(component.selectedAlbum).toBe(album)
});
it("Should have an h1 tag", () => {
  expect(debug.query(By.css("h1")).nativeElement.innerText).toBe("Albums");
});

});
