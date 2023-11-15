import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PortaoneComponent} from "./integration/portaone/portaone-customer-data/portaone.component";
import {FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import {PortaoneDataImportComponent} from "./integration/portaone/portaone-data-import/portaone-data-import.component";
import { InspectionListComponent } from './inspections/inspection-list/inspection-list.component';
import { CreateInspectionComponent } from './inspections/create-inspection/create-inspection.component';
import { DisplayNotificationComponent } from './notifications/display-notification/display-notification.component';
import { SendMessageComponent } from './notifications/send-message/send-message.component';
import { NotificationsHomeComponent } from './notifications/notifications-home/notifications-home.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, PortaoneComponent, PortaoneDataImportComponent, InspectionListComponent, 
      CreateInspectionComponent, NotificationsHomeComponent, DisplayNotificationComponent, SendMessageComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatExpansionModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
