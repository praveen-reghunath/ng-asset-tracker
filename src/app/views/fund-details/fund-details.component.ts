
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})
export class FundDetailsComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
  }

  fundFullName : string = "DSP BlackRock Micro Cap Fund - Direct Plan - Growth";

  tiles = [{
    title: "10000",
    description: "Current value",
    color:'text-success',
    icon:'account_balance'
  },
  {
    title: "5000",
    description: "Current value",
    color:'text-primary',
    icon:"fingerprint"
  },
  {
    title: "2000",
    description: "Current value",
    color:'text-info',
    icon:"track_changes"
  },
  {
    title: "2000",
    description: "Current value",
    color:'text-info',
    icon:"dashboard"
  },
  {
    title: "2000",
    description: "Current value",
    color:'text-danger',
    icon:"receipt"
  }];
  
  details=[{
    id:1,
    date:"",
    type:"",
  }];

}
