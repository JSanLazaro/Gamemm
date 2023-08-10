import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from '../../model/game.model';
import { games } from '../../data/mock-games';
import { GameService } from '../../services/game.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';
import { MatSort, Sort } from '@angular/material/sort';

declare var $: any;
@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss'],
})
export class GamelistComponent {
  @ViewChild(MatSort)
  matSort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  columnas: string[] = [
    'year',
    'title',
    'image',
    'gameplay',
    'description',
    'notamm',
  ];
  lightbox: any;
  searchText = '';
  iYear1: number = 2010;
  iYear2: number = 2016;
  iSearch!: string;
  iNotamm: number = 100;

  games: Game[] = games;
  sortedData: Game[] | undefined;
  dataSource: any;

  constructor(
    private gameService: GameService,
    private sanitizer: DomSanitizer,
    private _lightbox: Lightbox
  ) {}
  ngOnInit() {
    // this.oeService.getEvents().subscribe((data:OnlineEvent[])=>{
    //   this.events = data;
    this.dataSource = new MatTableDataSource<Game>(this.games);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;

    // })
  }
  ngAfterViewInit() {}
  playVideo(url: any) {
    // const displayURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY');
    // return displayURL;
    // $("#exampleModal").modal('show');
    console.warn('Video url : ', url);
    // this.lightbox = GLightbox({
    //   'href': `${url}`,
    //   'type': 'video',
    //   'source':'youtube',
    //   'width': 900,
    //   'autoplayvideo': true,
    // })
    // this.lightbox.open();
    // this.lightbox.on('open',()=>{

    // });
    // this.lightbox.on('close',()=>{
    //   this.lightbox.destroy();
    // })
    $('#modal_video').find('iframe').attr('src', url);
    $('#modal_video').modal('show');
  }
  closeVideo() {
    $('#modal_video').modal('hide');
    // $("#modal_video").find('iframe').html("");
    $('#modal_video').find('iframe').attr('src', '');
  }
  filter(e: any) {
    console.log('gamelist.component filter-> year1=' + this.iYear1);
    let year1 = this.iYear1;
    let year2 = this.iYear2;
    this.dataSource.filterPredicate = function (
      data: any,
      filter: number
    ): boolean {console.log(
        'gamelist.component filter-> boolean=' +
          (data.year >= year1) +
          ' data.year=' +
          data.year +
          ' this.iYear1=' +
          year1
      );
      return (
        (data.title.includes(filter) || data.description.includes(filter)) &&
        data.year >= year1 &&
        data.year < year2
      );   
    };
    this.dataSource.filter = e.target.value;
  }
  
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  filterYear1(e: any) {
    this.dataSource.filterPredicate = function (
      data: any,
      filter: number
    ): boolean {
      return data.year >= filter;
    };
    console.log('gamelist.component filteryear1--> year=' + e.target.value);
    this.dataSource.filter = e.target.value;
  }
  filterYear2(e: any) {
    this.dataSource.filterPredicate = function (
      data: any,
      filter: number
    ): boolean {
      return data.year < filter;
    };
    console.log('gamelist.component filteryear1--> year=' + e.target.value);
    this.dataSource.filter = e.target.value;
  }
}
