import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-vidlist',
  templateUrl: './vidlist.component.html',
  styleUrls: ['./vidlist.component.scss'],
})
export class VidlistComponent {
  @Input() gameid!: number;
  @Input() isTrailer!: boolean;
  vidurls!: string[];
  vidCollection: Array<object> = [];
  displayUrls: any[] = [];
  displayUrlIndex!:number;
  constructor(
    private gameService: GameService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    if (this.isTrailer) {
      this.vidurls = this.gameService.getGameTrailerUrlsById(this.gameid);
    } else {
      this.vidurls = this.gameService.getGameVidUrlsById(this.gameid);      
    }
    console.log('VidlistComponent ngOnInit-->vidurls=' + this.vidurls);
      for (let i = 0; i < this.vidurls.length; i++) {
        let videoObject = {
          video: this.sanitizer.bypassSecurityTrustResourceUrl(this.vidurls[i]),
          thumbImage: this.vidurls[i],
        };
        this.vidCollection.push(videoObject);
        this.displayUrls.push(
          this.sanitizer.bypassSecurityTrustResourceUrl(this.vidurls[i])
        );
      }
  }
  showModal(event: any) {
    console.log("vidlistComponent showModal--> event="+event);
    this.displayUrlIndex = event;
    $("#modal_video").find('iframe').attr("src", this.vidurls[event]);
    $("#modal_video").modal('show');
  }
}
