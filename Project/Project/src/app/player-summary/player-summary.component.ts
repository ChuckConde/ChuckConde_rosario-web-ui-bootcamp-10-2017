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
      this.getPlayersummary(params.realm, params.name);
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
  getRace(race) {
    if (race === 1) {
      return  'Human';
    }else if (race === 2) {
      return 'Orc';
    }else if (race === 3) {
      return 'Dwarf';
    } else if (race === 4) {
      return 'Night Elf';
    } else if (race === 5) {
      return 'Undead';
    } else if (race === 6) {
      return 'Tauren';
    } else if (race === 7) {
      return 'Gnome';
    } else if (race === 8) {
      return 'Troll';
    } else if (race === 9) {
      return 'Goblin';
    } else if (race === 10) {
      return 'Blood Elf';
    } else if (race === 11) {
      return 'Draenei';
    } else if (race === 22) {
      return 'Worgen';
    } else {
      return 'Pandaren';
    }
  }
  getClassP(classP) {
    if (classP === 1) {
      return 'Warrior';
    } else if (classP === 2) {
      return 'Paladin';
    } else if (classP === 3) {
      return 'Hunter';
    } else if (classP === 4) {
      return 'Rogue';
    } else if (classP === 5) {
      return 'Priest';
    } else if (classP === 6) {
      return 'Death Knight';
    } else if (classP === 7) {
      return 'Shaman';
    } else if (classP === 8) {
      return 'Mage';
    } else if (classP === 9) {
      return 'Warlock';
    } else if (classP === 10) {
      return 'Monk';
    } else if (classP === 11) {
      return 'Druid';
    } else {
      return 'Demon Hunter';
    }
    }
  }


