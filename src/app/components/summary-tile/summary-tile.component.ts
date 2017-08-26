import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[summary-tile]',
  templateUrl: './summary-tile.component.html',
  styleUrls: ['./summary-tile.component.scss']
})
export class SummaryTileComponent implements OnInit {

  @Input() item: any;

  title: string;
  description: string;

  constructor() { }

  ngOnInit() {
    this.title = this.item.title;
    this.description = this.item.description;
  }

}
