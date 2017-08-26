import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fund-summary-grid',
  templateUrl: './fund-summary-grid.component.html',
  styleUrls: ['./fund-summary-grid.component.scss']
})
export class FundSummaryGridComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  showFundDetails(id) {
    this.router.navigate(['/fundDetails', id]);
  }

}
