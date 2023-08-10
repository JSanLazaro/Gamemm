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
      if (gameIdParam != null) {
        this.id = +gameIdParam;
        this.game = this.gameService.getGameById(this.id);
      }
    });
  }
}
