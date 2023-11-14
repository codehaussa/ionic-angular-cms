import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.component.html',
  styleUrls: ['./inspection-list.component.scss'],
})
export class InspectionListComponent  implements OnInit {

  constructor(private alertController: AlertController, private loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {}

  async createInspection() {
    // console.log(this.CustomerList);
    // await this.router.navigate(['integration/portaone/import'], {queryParams: this.CustomerList, skipLocationChange: true});
    await  this.router.navigate(['inspections/create']);
  }

}
