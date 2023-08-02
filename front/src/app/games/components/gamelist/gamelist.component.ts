import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from '../../model/game.model';
import { games } from '../../data/mock-games';
import { GameService } from '../../services/game.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';


declare var $: any;
@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss'],
})
export class GamelistComponent {

  columnas: string[] = [
    'year',
    'title',
    'image',
    'gameplay',
    'description',
    'notamm',
  ];
  lightbox:any;


  games: Game[] = games;
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(
    private gameService: GameService,
    private sanitizer: DomSanitizer, private _lightbox:Lightbox
  ) {}
  ngOnInit() {
    // this.oeService.getEvents().subscribe((data:OnlineEvent[])=>{
    //   this.events = data;
    this.dataSource = new MatTableDataSource<Game>(this.games);
    this.dataSource.paginator = this.paginator;
    // })
  }
  playVideo(url:any) {
    // const displayURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY');
    // return displayURL;
    // $("#exampleModal").modal('show');
    console.warn("Video url : ", url);
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
    $("#modal_video").find('iframe').attr("src", url);
    $("#modal_video").modal('show');
    
  }
  closeVideo(){
    $("#modal_video").modal('hide');
    // $("#modal_video").find('iframe').html("");
    $("#modal_video").find('iframe').attr("src", "");   
    
  }
}
