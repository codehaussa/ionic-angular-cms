import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetCustomerInfoResponse} from "../portaone-customer-data/models/get-customer-info-response";

@Component({
  selector: 'app-portaone-data-import',
  templateUrl: './portaone-data-import.component.html',
  styleUrls: ['./portaone-data-import.component.scss'],
})
export class PortaoneDataImportComponent  implements OnInit {
  private customerDataForImport!: GetCustomerInfoResponse[];
  get CustomerDataForImport() {
    return this.customerDataForImport;
  }
  set CustomerDataForImport(value: GetCustomerInfoResponse[]) {
    this.customerDataForImport = value;
  }

  constructor(private router: Router) {
    this.CustomerDataForImport = this.router.getCurrentNavigation()?.extras.queryParams as GetCustomerInfoResponse[];
    // if (test){
    //   this.CustomerDataForImport = test;
    // }
    console.log(this.CustomerDataForImport);
  }

  ngOnInit() {}

}
