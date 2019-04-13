import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ForecastComponent } from './forecast/forecast.component';
import { InsightComponent } from './insight/insight.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { 
    path: 'home', component: HomeComponent,
    children : [{path:'', component:HomeComponent}] 
},
{ 
    path: 'account', component: AccountComponent,
    children : [{path:'', component:AccountComponent}] 
},
{ path: '', redirectTo:'/home', pathMatch: 'full'},
{ 
    path: 'connections', component: ConnectionsComponent,
    children : [{path:'', component:ConnectionsComponent}] 
},
{ 
    path: 'forecast', component: ForecastComponent,
    children : [{path:'', component:ForecastComponent}] 
},
{ 
    path: 'insight', component: InsightComponent,
    children : [{path:'', component: InsightComponent}] 
},
{ 
    path: 'sidebar', component: SidebarComponent,
    children : [{path:'', component:SidebarComponent}] 
},
{ 
    path: 'settings', component: SettingsComponent,
    children : [{path:'', component:SettingsComponent}] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }