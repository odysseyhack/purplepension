import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { InsightComponent } from './insight/insight.component';
import { ConnectionsComponent } from './connections/connections.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FitappService } from './services/fitapp.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
    InsightComponent,
    ConnectionsComponent,
    NotificationsComponent,
    SettingsComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    FitappService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
