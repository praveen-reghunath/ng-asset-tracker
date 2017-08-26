import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SummaryTileComponent } from './components/summary-tile/summary-tile.component';
import { FundSummaryGridComponent } from './components/fund-summary-grid/fund-summary-grid.component';
import { RouterModule, Routes } from '@angular/router';
import { FundDetailsComponent } from './views/fund-details/fund-details.component';
import { FundSummaryComponent } from './views/fund-summary/fund-summary.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const appRoutes: Routes = [
  { path: '', component: FundSummaryComponent },
  { path: 'fundDetails/:id', component: FundDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SummaryTileComponent,
    FundSummaryGridComponent,
    FundDetailsComponent,
    FundSummaryComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
