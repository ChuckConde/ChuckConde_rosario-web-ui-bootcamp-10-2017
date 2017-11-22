import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PvpService } from '../pvp.service';
import { Pvp } from '../pvp';
import { Pvp3v3Service } from '../pvp3v3.service';
import { Pvp3v3 } from '../pvp3v3';
import { PvprbgService } from '../pvprbg.service';
import { Pvprbg } from '../pvprbg';

@Component({
  selector: 'app-pvp',
  templateUrl: './pvp.component.html',
  styleUrls: ['./pvp.component.scss']
})
export class PvpComponent implements OnInit {

  pvps: Pvp[] = [];
  pvps3v3: Pvp3v3[] = [];
  pvpsrbg: Pvprbg[] = [];
  constructor(private pvpService: PvpService, private pvp3v3Service: Pvp3v3Service, private pvprbgService: PvprbgService) { }

  ngOnInit() {
    this.pvpService.getPvplist().subscribe(pvps => {
      this.pvps = pvps;
    });
    this.pvp3v3Service.getPvp3v3list().subscribe(pvps3v3 => {
      this.pvps3v3 = pvps3v3;
    });
    this.pvprbgService.getPvprbglist().subscribe(pvpsrbg => {
      this.pvpsrbg = pvpsrbg;
    });
  }

}
