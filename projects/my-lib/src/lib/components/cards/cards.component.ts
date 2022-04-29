import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import ICards from '../../models/ICards';

@Component({
  selector: 'lib-cards',
  templateUrl: './cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponentModule implements OnInit, OnChanges {

  @Input() class: ICards

  constructor() { }

  ngOnInit(): void {
    console.log('init')

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  changeText() {
    console.log('check render')
  }

}
