import { Component } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { games } from '../../data/mock-games';

@Component({
  selector: 'app-gamegrid',
  templateUrl: './gamegrid.component.html',
  styleUrls: ['./gamegrid.component.scss'],
})
export class GamegridComponent {
  columns: MtxGridColumn[] = [
    { header: 'Titulo', field: 'title' },
    { header: 'Descripcion', field: 'description' },
    {header: ' Imagen', field:'img_url'}
  ];

  list = games;

  trackByName(index: number, item: any) {
    return item.title;
  }
}
