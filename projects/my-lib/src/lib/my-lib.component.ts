import { Component, OnInit } from '@angular/core';
import ICards from './models/ICards';

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
})
export class MyLibComponent implements OnInit {

  description: string;

  public cards: ICards[] = [
    {caracter: 'dragon', energy: 20, level: 3},
    {caracter: 'warrior', energy: 15, level: 1.5},
    {caracter: 'Wizard', energy: 10, level: 3}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  valuechange(value) {
    console.log(value);
  }

}
