import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../model/game.model';

@Component({
  selector: 'app-vdetails',
  templateUrl: './vdetails.component.html',
  styleUrls: ['./vdetails.component.scss'],
})
export class VdetailsComponent {
  game!: Game;
  @Input() id!: number;
  constructor(
    private gameService: GameService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const gameIdParam = params.get('id');
      console.log('vdetailsComponent ngOnInit--> ParamsId =' + gameIdParam);
      if (gameIdParam != null) {
        this.id = +gameIdParam;
        console.log('vdetailsComponent ngOnInit--> ConvertedParamsId =' + this.id);
        this.game = this.gameService.getGameById(this.id);
        console.log('vdetailsComponent ngOnInit--> gameId =' + this.game._id);
      }
    });
  }
}
