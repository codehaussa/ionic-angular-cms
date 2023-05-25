import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {AlertController} from "@ionic/angular";
import {PortaoneService} from "./repo/portaone-service";
import {GetAccountListRequest} from "./models/get-account-list-request";
import { LoadingController } from "@ionic/angular";
import {AccountListResponse, GetAccountListResponse} from "./models/get-account-list-response";
import Swal from "sweetalert2";
import {GetCustomerInfoRequest} from "./models/get-customer-info-request";
import {CustomerInfo, GetCustomerInfoResponse} from "./models/get-customer-info-response";
import { isDevMode } from '@angular/core';
import {CustomerInfoViewModel} from "./viewmodels/customer-info-view-model";


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
  portaOneMethod: string = '';

  private accountList!: Array<GetAccountListResponse>;
  set AccountList(value: Array<GetAccountListResponse>) {
    this.accountList = value;
  }
  get AccountList() {
    return this.accountList;
  }

  private customerInfo!: Array<CustomerInfo>;
  get CustomerInfo() {
    return this.customerInfo;
  }
  set CustomerInfo(value: Array<CustomerInfo>) {
    this.customerInfo = value;
  }
  // customerViewModelList: CustomerInfoViewModel[] = [];
  private customerViewModelList!: Array<CustomerInfoViewModel>;
  get CustomerViewModelList() {
    return this.customerViewModelList;
  }
  set CustomerViewModelList(value: Array<CustomerInfoViewModel>) {
    this.customerViewModelList = value;
  }
  constructor(private alertController: AlertController, private portaoneService: PortaoneService, private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    if(isDevMode()) {
      this.portaOneSourceHost = 'adminlogin.softphonevip.co.za:8442';
      this.portaOneSourceLogin = 'Seismic100';
      this.portaOneSourcePassword = 'G@MERboy91';
      this.portaOneMethod = 'getAccountList';
    }
  }

  portaOneMethodChange(e:any) {
    this.portaOneMethod = e.detail.value;
    //this.pushLog('ionChange fired with value: ' + e.detail.value);
  }

   async getData() {
     const loading = await this.loadingCtrl.create({
       message: 'Getting Data...',
       duration: 0,
     });
     await loading.present().then(() => {
       if(this.portaOneMethod === 'getAccountList') {
         let getCustomerInfoRequest: GetCustomerInfoRequest = new GetCustomerInfoRequest();
         getCustomerInfoRequest.HostName = this.portaOneSourceHost;
         getCustomerInfoRequest.Login = this.portaOneSourceLogin;
         getCustomerInfoRequest.Password = this.portaOneSourcePassword;

         this.portaoneService.getCustomerInfo(getCustomerInfoRequest).subscribe(data => {
           console.log(data);
           loading.dismiss();
         })

         // this.portaoneService.getAccountList(getAccountListRequest).subscribe(data => {
         //   this.AccountList = data.account_list;
         //   console.log("account list:", this.AccountList);
         //
         //   let companyIds: Array<number> = Array();
         //   let customerInfoResponseList: Array<CustomerInfo> = Array();
         //   for (let i = 0; i < this.AccountList.length; i++) {
         //     if(!companyIds.includes(this.AccountList[i].i_customer)) {
         //       companyIds.push(this.AccountList[i].i_customer);
         //     }
         //   }
         //
         //   for (let j = 0; j < companyIds.length; j++) {
         //     let getCustomerInfoRequest: GetCustomerInfoRequest = new GetCustomerInfoRequest();
         //     getCustomerInfoRequest.Login = this.portaOneSourceLogin;
         //     getCustomerInfoRequest.Password = this.portaOneSourcePassword;
         //     getCustomerInfoRequest.HostName = this.portaOneSourceHost;
         //     getCustomerInfoRequest.CustomerId = companyIds[j];
         //
         //     const serviceResponse = this.portaoneService.getCustomerInfo(getCustomerInfoRequest).toPromise();
         //     let customerInfoResponse = serviceResponse.then(data => {
         //      console.log("New Service: ", data);
         //      if(!data === null || !data === undefined){
         //        if(data?.customer_info !== undefined) {
         //          customerInfoResponseList.push(data?.customer_info);
         //        }
         //
         //      }
         //      // customerInfoResponseList.push(data.customer_info?);
         //     });
             // this.portaoneService.getCustomerInfo(getCustomerInfoRequest).subscribe(customer => {
             //   let customerInfoResponse: GetCustomerInfoResponse = customer;
             //   // let customerInfo: CustomerInfo = customerInfoResponse.customer_info;
             //   console.log("customerInfoResponse: ", customerInfoResponse);
             //   // console.log("customerInfo: ", customerInfo);
             //   customerInfoResponseList.push(customer);
             // }).;
           // }
           // console.log("customerInfoResponseList count:", customerInfoResponseList.length);
         // });

         // for (let i = 0; i < this.AccountList.length; i++) {
         //   let getCustomerInfoRequest: GetCustomerInfoRequest = new GetCustomerInfoRequest();
         //   getCustomerInfoRequest.Login = this.portaOneSourceLogin;
         //   getCustomerInfoRequest.Password = this.portaOneSourcePassword;
         //   getCustomerInfoRequest.HostName = this.portaOneSourceHost;
         //   getCustomerInfoRequest.CustomerId = companyIds[i];
         //   this.portaoneService.getCustomerInfo(getCustomerInfoRequest).subscribe(customer => {
         //     customerInfoList.push(customer.customer_info);
         //   });
         // }
         //
         // console.log("customer info List count: ", customerInfoList);

         // this.portaoneService.getAccountList(getAccountListRequest).subscribe(data => {
         //   this.AccountList = data.account_list;
         //   let companyIds: Array<number> = Array();
         //   let customerInfoList: Array<CustomerInfo> = Array();
         //   for (let i = 0; i < this.AccountList.length; i++) {
         //     if(!companyIds.includes(this.AccountList[i].i_customer)) {
         //       companyIds.push(this.AccountList[i].i_customer);
         //     }
         //   }
         //   // console.log(companyIds);
         //   for (let i = 0; i < companyIds.length; i++) {
         //     let getCustomerInfoRequest: GetCustomerInfoRequest = new GetCustomerInfoRequest();
         //       getCustomerInfoRequest.Login = this.portaOneSourceLogin;
         //       getCustomerInfoRequest.Password = this.portaOneSourcePassword;
         //       getCustomerInfoRequest.HostName = this.portaOneSourceHost;
         //       getCustomerInfoRequest.CustomerId = companyIds[i];
         //
         //     this.portaoneService.getCustomerInfo(getCustomerInfoRequest).subscribe(customer => {
         //       customerInfoList.push(customer.customer_info);
         //       console.log(customerInfoList.length);
         //       this.CustomerInfo = customerInfoList;
         //     });
         //   }
         //   // console.log("customerInfo Count:", customerInfoList.length);
         //   // this.CustomerInfo = customerInfoList;
         //   this.syncData();
         // });
       }
       else {
         Swal.fire({
           titleText: 'Error',
           text: 'Please select the data you want to display...',
           icon: 'error',
           heightAuto: false,
           backdrop: true
         }).then(() => {
           loading.dismiss();
         })
       }
     });
  }

   syncData() {

    let _customerViewModelList: Array<CustomerInfoViewModel>;
    _customerViewModelList = Array();
    const customerInfo = this.CustomerInfo;
    console.log("customerInfo", customerInfo);
    // const customerInfoEntries = this.CustomerInfo.entries();
    // customerInfoEntries.
    // console.log(customerInfoEntries)
    const accountList = this.AccountList;
    console.log("accountList", accountList);

    // for (const element of customerInfoEntries) {
    //   console.log("customerInfo", element);
    // }

    // for (let i = 0; i < customerInfo.length; i++) {
    //   const customer_id = customerInfo[i].i_customer;
    //   console.log("customer_id", customer_id);
    //   const account_list = accountList.filter(x => x.i_customer == customer_id);
    //
    //   let customerInfoViewModel: CustomerInfoViewModel = new CustomerInfoViewModel();
    //   customerInfoViewModel.customer_info = customerInfo[i];
    //   customerInfoViewModel.account_list = account_list;
    //   console.log("customerInfoViewModel", customerInfoViewModel);
    //   _customerViewModelList.push(customerInfoViewModel);
    //   //this.customerViewModelList.push(customerInfoViewModel);
    // }




    // return customerViewModelList;
    // let newVar = await return customerViewModelList;

    // this.CustomerViewModelList = customerViewModelList;


    // console.log("customerViewModelList1", customerViewModelList);
    // console.log("customerViewModelList2", this.CustomerViewModelList);


    //await this.loadingCtrl.dismiss();
  }

}
