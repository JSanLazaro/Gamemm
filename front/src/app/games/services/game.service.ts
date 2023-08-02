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
    console.log('gameService getGameById-->idBuscado=' + id);
    let selectedObject = this.filterById(games, id);
    console.log('gameService getGameById-->gameidEncontrado=' + selectedObject._id);
    return selectedObject;
  }
  filterById(games: Game[], id: number):Game {
    for(let i=0;i<games.length;i++){
      let game = games[i];
      console.log("gameService filterById-->i="+i+" idBuscado="+ id + " game_id="+game._id);
      if (game._id==id){
        console.log("gameService filterById--> Id coincidente");
        return game;
      }
    }
    return games[0];
  }
}
