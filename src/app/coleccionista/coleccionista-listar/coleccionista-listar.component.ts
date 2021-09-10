import { Component, OnInit } from '@angular/core';
import { Coleccionista } from '../coleccionista';
import {Album} from '../album';
import { ColeccionistaService } from '../coleccionista.service';
import { AlbumService } from '../album.service';
import { CollectorDetail } from '../collectorDetail';

@Component({
  selector: 'app-coleccionista-listar',
  templateUrl: './coleccionista-listar.component.html',
  styleUrls: ['./coleccionista-listar.component.css']
})
export class ColeccionistaListarComponent implements OnInit {
  constructor(private coleccionistaService: ColeccionistaService, private albumService: AlbumService) { }
  coleccionistas: Array<CollectorDetail>;
  albumes:  Array<Album>;
  albumesColeccionista: Array<any>;
  selected = false;
  selectedCollector: CollectorDetail;

  getColeccionistaList() {
    this.coleccionistaService.getColeccionistas().subscribe(cs => {
      this.coleccionistas = cs;
    })
    return this.coleccionistas;
  }

  getAlbumes() {
    this.albumService.getAlbum().subscribe(albumes => {
      this.albumes = albumes;
    })
  }

  onSelected(c: CollectorDetail): void {
    this.selected = true;
    this.selectedCollector = c;
  }

  ngOnInit() {
    this.getColeccionistaList();
    this.getAlbumes();
  }

}
