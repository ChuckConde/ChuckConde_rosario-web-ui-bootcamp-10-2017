import { Component, OnInit } from '@angular/core';
import { GuildService } from '../guild.service';
import { Guild } from '../guild';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../race.service';
import { ClassService } from '../class.service';
import { Race } from '../race';
import { Class } from '../class';


@Component({
  selector: 'app-guild-summary',
  templateUrl: './guild-summary.component.html',
  styleUrls: ['./guild-summary.component.scss']
})
export class GuildSummaryComponent implements OnInit {
  p = 1;
  guilds: Guild;
  races: Race[];
  raceFound = false;
  classes: Class[];
  classFound = false;
  // tslint:disable-next-line:max-line-length
  constructor(private guildService: GuildService, private activatedRoute: ActivatedRoute, private raceService: RaceService, private classService: ClassService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getGuildsummary(params.realm, params.name);
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
  private getGuildsummary(realm: string, name: string) {
    this.guildService.getGuildsummary(realm, name).subscribe(guilds => {
      this.guilds = guilds;
    });
  }
}
