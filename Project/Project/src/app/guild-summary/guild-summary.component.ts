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
  getRace(race) {
    if (race === 1) {
      return 'Human';
    } else if (race === 2) {
      return 'Orc';
    } else if (race === 3) {
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
