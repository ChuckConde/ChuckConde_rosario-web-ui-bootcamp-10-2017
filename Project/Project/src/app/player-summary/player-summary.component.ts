import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss']
})
export class PlayerSummaryComponent implements OnInit {
  players: Player;
  playerRender: string;
  renderPath: string;

  constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getPlayersummary(params['realm'], params['name']);
    });
  }
  playerRenderStringGenerator(thumbnail: string) {
    return thumbnail.slice(0, -11);
  }
  private getPlayersummary(realm: string, name: string) {
    this.playerService.getPlayersummary(realm, name).subscribe(players => {
      this.players = players;
      this.playerRender = this.playerRenderStringGenerator(players.thumbnail);
      this.renderPath = `http://render-api-us.worldofwarcraft.com/static-render/us/${this.playerRender}-profilemain.jpg`;

    });
  }
}


