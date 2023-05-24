import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {AlertController} from "@ionic/angular";
import {PortaoneService} from "./repo/portaone-service";
import {GetAccountListRequest} from "./models/get-account-list-request";
import { LoadingController } from "@ionic/angular";
import {AccountListResponse, GetAccountListResponse} from "./models/get-account-list-response";
import Swal from "sweetalert2";
import {GetCustomerInfoRequest} from "./models/get-customer-info-request";

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
  portaOneMethod: string = "";

  portaOneSourceAccountList: GetAccountListResponse[] = [];
  portaOneCustomerInfo: any = [];
  constructor(private alertController: AlertController, private portaoneService: PortaoneService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  portaOneMethodChange(e:any) {
    this.portaOneMethod = e.detail.value;
    //this.pushLog('ionChange fired with value: ' + e.detail.value);
  }

   async getData() {
     const loading = await this.loadingCtrl.create({
       message: 'Getting Accounts...',
       duration: 0,
     });
     await loading.present().then(() => {
       if(this.portaOneMethod === 'getAccountList') {
         let getAccountListRequest: GetAccountListRequest = new GetAccountListRequest();
         getAccountListRequest.HostName = this.portaOneSourceHost;
         getAccountListRequest.Login = this.portaOneSourceLogin;
         getAccountListRequest.Password = this.portaOneSourcePassword;

         this.portaoneService.getAccountList(getAccountListRequest).subscribe(data => {
           this.portaOneSourceAccountList = data.account_list;
           let companyIds: number[] = [];
           for (let i = 0; i < this.portaOneSourceAccountList.length; i++) {
             if(!companyIds.includes(this.portaOneSourceAccountList[i].i_customer)) {
               companyIds.push(this.portaOneSourceAccountList[i].i_customer);
             }
           }

           for (let i = 0; i < companyIds.length; i++) {
             let getCustomerInfoRequest: GetCustomerInfoRequest = new GetCustomerInfoRequest();
               getCustomerInfoRequest.Login = this.portaOneSourceLogin;
               getCustomerInfoRequest.Password = this.portaOneSourcePassword;
               getCustomerInfoRequest.HostName = this.portaOneSourceHost;
               getCustomerInfoRequest.CustomerId = companyIds[i];

             this.portaoneService.getCustomerInfo(getCustomerInfoRequest).subscribe(response => {
               console.log(companyIds[i] ,response);
               this.portaOneCustomerInfo.push(response);
             });
           }

           // for (let i = 0; i < this.portaOneSourceAccountList.length; i++) {
           //   let getCustomerInfoRequest: GetCustomerInfoRequest = new GetCustomerInfoRequest();
           //   getCustomerInfoRequest.Login = this.portaOneSourceLogin;
           //   getCustomerInfoRequest.Password = this.portaOneSourcePassword;
           //   getCustomerInfoRequest.HostName = this.portaOneSourceHost;
           //   getCustomerInfoRequest.CustomerId = this.portaOneSourceAccountList[i].i_customer;
           //
           //   // console.log("Getting info for customer: ", this.portaOneSourceAccountList[i].i_customer);
           //   this.portaoneService.getCustomerInfo(getCustomerInfoRequest).subscribe(response => {
           //     // console.log("Getting info for customer: ", getCustomerInfoRequest.CustomerId);
           //     // console.log(response);
           //     this.portaOneCustomerInfo.push(response);
           //   });
           // }
           // console.log(this.portaOneCustomerInfo);
           // console.log(this.portaOneCustomerInfo);
           loading.dismiss();
         });
       }
       else {
         Swal.fire({
           titleText: 'Error',
           text: 'Please select the correct method',
           icon: 'error',
           heightAuto: false,
           backdrop: true
         }).then(() => {
           loading.dismiss();
         })
       }
     });
  }

}
