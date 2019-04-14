import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { InsightComponent } from './components/insight/insight.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FitappService } from './services/fitapp/fitapp.service';
import { BlockchainService } from './services/blockchain/blockchain.service';

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
    FitappService,
    BlockchainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
