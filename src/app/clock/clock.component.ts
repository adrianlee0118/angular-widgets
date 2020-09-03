import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.tick();
  }

  tick(): void {
    setInterval(() => this.date = new Date(), 1000);
  }
}
