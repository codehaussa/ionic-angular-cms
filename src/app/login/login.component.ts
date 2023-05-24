import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
import { LoginService} from "./repo/login.service";
import {LoginRequest} from "./models/login-request";
import Swal from 'sweetalert2';
import {FeaturesService} from "../dashboard/repo/features.service";
import {CompanyFeaturesReqeust} from "../dashboard/models/company-features-reqeust";
import {CompanyFeature} from "../dashboard/models/company-features-response";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();
  companyFeaturesRequest: CompanyFeaturesReqeust = new CompanyFeaturesReqeust();

  constructor(private alertController: AlertController, private router: Router, private loginService: LoginService, private featuresService: FeaturesService,
              private loadingCtrl: LoadingController) {
    environment.shouldDisableMenu = true;
  }

  ngOnInit() {}

  async doLogin() {
    const loading = await this.loadingCtrl.create({
      message: 'Logging you in...',
      duration: 0,
    });
    await loading.present();
    this.loginService.loginUser(this.loginRequest).subscribe(data => {
      if(data) {
        Swal.fire({
          titleText: 'Success',
          text: 'Successfully logged in.',
          icon: 'success',
          heightAuto: false,
          backdrop: true
        }).then(() => {
          loading.message = 'Getting features...';
          this.companyFeaturesRequest.Company_Code = this.loginRequest.Company_code;
          this.featuresService.getCompanyFeatures(this.companyFeaturesRequest).subscribe((features) => {
            loading.dismiss();
            this.router.navigate(['dashboard']);
          });
        });
      }
      else {
        loading.dismiss();
        Swal.fire({
          title: 'Error',
          text: 'Could not log you in.  Please check your credentials and try again.',
          icon: 'error',
          heightAuto: false
        });
      }
    });
  }

}
