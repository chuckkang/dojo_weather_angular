import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanjoseComponent} from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { WashingtondcComponent } from './washingtondc/washingtondc.component';
import { DallasComponent } from './dallas/dallas.component';
const routes: Routes = [
	{ path: "", component: SanjoseComponent, pathMatch:"full"},
	{ path: "seattle", component: SeattleComponent, pathMatch: "full" },
	{ path: "chicago", component: ChicagoComponent, pathMatch: "full" },
	{ path: "burbank", component: BurbankComponent, pathMatch: "full" },
	{ path: "washingtondc", component: WashingtondcComponent, pathMatch: "full" },
	{ path: "dallas", component: DallasComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
