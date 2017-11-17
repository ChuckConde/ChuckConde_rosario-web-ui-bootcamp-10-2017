import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { RaceService } from '../race.service';
import { ClassService } from '../class.service';
import { Player } from '../player';
import { Race } from '../race';
import { Class } from '../class';
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
  races: Race[];
  raceFound = false;
  classes: Class[];
  classFound = false;

  // tslint:disable-next-line:max-line-length
  constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute, private raceService: RaceService, private classService: ClassService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getPlayersummary(params.realm, params.name);
    });
    this.raceService.getRace()
      .subscribe(racesAnswer => {
        this.races = racesAnswer.races;
        this.raceFound = true;
      });
    this.classService.getClass()
      .subscribe(classesAnswer => {
        this.classes = classesAnswer.classes;
        this.classFound = true;
      });
  }
  raceCheck(id: number): string {
    let raceName = 'Race doesnt Found ';
    if (this.raceFound) {
      this.races.forEach(
        race => {
          if (race.id == id) {
            raceName = race.name;
          }
        }
      );
    }
    return raceName;
  }
  classCheck(id: number): string {
    let className = 'Class doesnt found';
    if (this.classFound) {
      this.classes.forEach(
        classType => {
          if (classType.id == id) {
            className = classType.name;
          }
        }
      );
    }
    return className;
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


