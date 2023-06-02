import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetCustomerInfoResponse} from "../portaone-customer-data/models/get-customer-info-response";
import {PortaoneBaseService} from "../services/portaone-base.service";

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

  constructor(private router: Router, private service: PortaoneBaseService) {
    this.service.emitter.subscribe(data => {
      this.CustomerDataForImport = data;
    });
    console.log(this.CustomerDataForImport);
  }

  ngOnInit() {}

  checkChangedData() {
    console.log(this.CustomerDataForImport);
  }
}
