import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit, OnDestroy {

  @Input()
  cardName: string;

  @Input() email: string;
  @Input() phone: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
