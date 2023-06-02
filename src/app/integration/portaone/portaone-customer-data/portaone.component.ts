import {Component, Input, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";
import {PortaoneService} from "./repo/portaone-service";
import { LoadingController } from "@ionic/angular";
import Swal from "sweetalert2";
import {GetCustomerInfoRequest} from "./models/get-customer-info-request";
import {GetCustomerInfoResponse} from "./models/get-customer-info-response";
import { isDevMode } from '@angular/core';
import {Router} from "@angular/router";
import {PortaoneDataImportComponent} from "../portaone-data-import/portaone-data-import.component";
import {PortaoneBaseService} from "../services/portaone-base.service";

@Component({
  selector: 'app-portaone',
  templateUrl: './portaone.component.html',
  styleUrls: ['./portaone.component.scss'],
})
export class PortaoneComponent  implements OnInit {
  portaOneSourceHost = '';
  portaOneSourceLogin = '';
  portaOneSourcePassword = '';
  portaOneDestinationHost = '';
  portaOneDestinationLogin = '';
  portaOneDestinationPassword = '';
  // component = PortaoneComponent;

  private customer_list!: Array<GetCustomerInfoResponse>;
  get CustomerList() {
    return this.customer_list;
  }
  set CustomerList(value: Array<GetCustomerInfoResponse>) {
    this.customer_list = value;
  }

  private showResults!: boolean;
  get ShowResults() {
    if(this.CustomerList !== undefined) {
      return this.CustomerList.length > 0;
    }else {
      return false;
    }
  }
  set ShowResults(value) {
    this.showResults = value;
  }

  constructor(private alertController: AlertController, private portaoneService: PortaoneService, private loadingCtrl: LoadingController, private router: Router, private service: PortaoneBaseService) {
    this.ShowResults = false;
  }

  ngOnInit() {
    if(isDevMode()) {
      this.portaOneSourceHost = 'adminlogin.softphonevip.co.za:8442';
      this.portaOneSourceLogin = 'Seismic100';
      this.portaOneSourcePassword = 'G@MERboy91';
    }
  }

   async getData() {
     const loading = await this.loadingCtrl.create({
       message: 'Getting Data...',
       duration: 0,
       spinner: "crescent"
     });
     await loading.present().then(() => {
       // if(this.portaOneMethod === 'getAccountList') {
         let getCustomerInfoRequest: GetCustomerInfoRequest = new GetCustomerInfoRequest();
         getCustomerInfoRequest.HostName = this.portaOneSourceHost;
         getCustomerInfoRequest.Login = this.portaOneSourceLogin;
         getCustomerInfoRequest.Password = this.portaOneSourcePassword;

         this.portaoneService.getCustomerInfo(getCustomerInfoRequest).subscribe(data => {
           this.CustomerList = data;
           // console.log(this.CustomerList);
           loading.dismiss();
         });
     });
  }

  async importData() {
    // console.log(this.CustomerList);
    // await this.router.navigate(['integration/portaone/import'], {queryParams: this.CustomerList, skipLocationChange: true});
    await  this.router.navigate(['integration/portaone/import']).then(() => this.service.emitter.emit(this.CustomerList));
  }
}
