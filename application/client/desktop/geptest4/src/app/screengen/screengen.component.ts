import { Component, OnInit } from '@angular/core';
import { ScreengenService } from './screengen.service.ts';

@Component({
  selector: 'app-screengen',
  templateUrl: './screengen.component.html',
  styleUrls: ['./screengen.component.scss'],
})

export class ScreengenComponent implements OnInit {

    constructor (
        private screengenService: ScreengenService,
    ) { }

    ngOnInit() {
    }
}