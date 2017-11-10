import { Component, OnInit } from '@angular/core';
import { RealmsService } from '../realms.service';
import { Realms } from '../realms';
import { PlayerService} from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  realms: Realms[] = [];

  constructor(private realmsService: RealmsService) { }

  ngOnInit() {
    this.realmsService.getRealmslist().subscribe(realms => {
      this.realms = realms;
    });
  }

}
