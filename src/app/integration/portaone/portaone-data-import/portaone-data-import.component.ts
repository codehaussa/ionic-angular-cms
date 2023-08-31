import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetCustomerInfoResponse} from "../portaone-customer-data/models/get-customer-info-response";
import {PortaoneBaseService} from "../services/portaone-base.service";
import { LoadingController } from '@ionic/angular';
import { PortaoneService } from '../portaone-customer-data/repo/portaone-service';
import { GetCustomerInfoRequest } from '../portaone-customer-data/models/get-customer-info-request';
import Swal from "sweetalert2";

@Component({
  selector: 'app-portaone-data-import',
  templateUrl: './portaone-data-import.component.html',
  styleUrls: ['./portaone-data-import.component.scss'],
})
export class PortaoneDataImportComponent  implements OnInit {
  dataForExport: GetCustomerInfoResponse[] = [];

  private customerDataForImport!: GetCustomerInfoResponse[];
  get CustomerDataForImport() {
    return this.customerDataForImport;
  }
  set CustomerDataForImport(value: GetCustomerInfoResponse[]) {
    this.customerDataForImport = value;
  }

  constructor(private router: Router, private service: PortaoneBaseService, private loadingCtrl: LoadingController, private portaoneService: PortaoneService) {
    this.service.emitter.subscribe(data => {
      this.CustomerDataForImport = data;
    });
    console.log(this.CustomerDataForImport);
  }

  ngOnInit() {}

  checkboxChange(e:any){
    if(e.detail.checked === true) {
      console.log(e);
      this.dataForExport.push(e.detail.value)
    }
    else {
      this.dataForExport.forEach((element,index)=>{
        if(element==e.detail.value)  this.dataForExport.splice(index,1);
      });
    }

    console.log("Export Data: ", this.dataForExport);
  }

  async exportDataForImport() {
    if(this.dataForExport.length > 0) {
      const loading = await this.loadingCtrl.create({
        message: 'Exporting Data...',
        duration: 0,
        spinner: "crescent"
      });
      await loading.present().then(() => {
        this.portaoneService.exportSelectedCustomer(JSON.stringify(this.dataForExport)).subscribe(response => {
          if (response) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-right',
              iconColor: 'white',
              customClass: {
                popup: 'colored-toast'
              },
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            });
            Toast.fire({
              icon: "success",
              iconColor: "white",
              text: 'Successfully exported data.',
            }).then(() => {
              loading.dismiss();
            });
          } else {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-right',
              iconColor: 'white',
              customClass: {
                popup: 'colored-toast'
              },
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            });
            Toast.fire({
              icon: "error",
              iconColor: "white",
              text: 'Could not export data',
            }).then(() => {
              loading.dismiss();
            });
          }
        });
      });
    }
    else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      });
      Toast.fire({
        icon: "error",
        iconColor: "white",
        text: 'No Items selected for Exporting',
      })
    }
  }
}
