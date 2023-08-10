import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-imglist',
  templateUrl: './imglist.component.html',
  styleUrls: ['./imglist.component.scss']
})
export class ImglistComponent {
  @Input() gameid!:number;
  imgurls!: string[];
  imgCollection: Array<object> = [];
  constructor(private gameService:GameService){};
  ngOnInit(){
    
    this.imgurls = this.gameService.getGameImgUrlsById(this.gameid);
    console.log("ImglistComponent ngOnInit-->imgurls="+this.imgurls);
    for(let i=0;i<this.imgurls.length;i++){
      let imageObject = {
        image: this.imgurls[i],
        thumbImage: this.imgurls[i]
      }
      this.imgCollection.push(imageObject);
    }    
  }
}
