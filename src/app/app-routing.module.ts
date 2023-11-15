import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PortaoneComponent} from "./integration/portaone/portaone-customer-data/portaone.component";
import {PortaoneDataImportComponent} from "./integration/portaone/portaone-data-import/portaone-data-import.component";
import { InspectionListComponent } from './inspections/inspection-list/inspection-list.component';
import { CreateInspectionComponent } from './inspections/create-inspection/create-inspection.component';
import { DisplayNotificationComponent } from './notifications/display-notification/display-notification.component';
import { SendMessageComponent } from './notifications/send-message/send-message.component';
import { NotificationsHomeComponent } from './notifications/notifications-home/notifications-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  { path: 'integration/portaone', component: PortaoneComponent},
  { path: 'integration/portaone/import', component: PortaoneDataImportComponent},
  { path: 'inspections/list', component: InspectionListComponent},
  { path: 'inspections/create', component: CreateInspectionComponent},
  { path: 'notifications/home', component: NotificationsHomeComponent},
  { path: 'notifications/show', component: DisplayNotificationComponent},
  { path: 'notifications/send', component: SendMessageComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
