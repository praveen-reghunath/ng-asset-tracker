import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-summary',
  templateUrl: './fund-summary.component.html',
  styleUrls: ['./fund-summary.component.scss']
})
export class FundSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  summary = [{
    title: "10000",
    description: "Current value",
    color:'text-success',
    icon:'timeline'
  },
  {
    title: "5000",
    description: "Current value",
    color:'text-primary'
  },
  {
    title: "2000",
    description: "Current value",
    color:'text-info'
  },
  {
    title: "2000",
    description: "Current value",
    color:'text-danger'
  }];
}
