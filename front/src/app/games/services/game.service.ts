import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';
import { Observable } from 'rxjs';
import { games } from '../data/mock-games';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}
  getGameById(id: number): Game {
    let selectedObject = this.filterById(games, id);
    return selectedObject;
  }
  getGameImgUrlsById(id:number){
    let game = this.getGameById(id);
    return game.img_urls;
  }
  getGameVidUrlsById(id:number){
    let game = this.getGameById(id);
    return game.vid_urls;
  }
  getGameTrailerUrlsById(id:number){
    let game = this.getGameById(id);
    return game.trailer_urls;
  }
  filterById(games: Game[], id: number):Game {
    for(let i=0;i<games.length;i++){
      let game = games[i];
      if (game._id==id){
        return game;
      }
    }
    return games[0];
  }
}
