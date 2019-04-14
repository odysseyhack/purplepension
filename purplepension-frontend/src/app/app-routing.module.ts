import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { InsightComponent } from './components/insight/insight.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

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
},
{ 
    path: 'notifications', component: NotificationsComponent,
    children : [{path:'', component:NotificationsComponent}] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }