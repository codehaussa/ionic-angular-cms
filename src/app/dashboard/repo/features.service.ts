import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompanyFeaturesReqeust} from "../models/company-features-reqeust";
import {CompanyFeature} from "../models/company-features-response";

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  public baseUrl = "https://codehaussa.com/cms/api/webservice.php?";
  constructor(private httpClient: HttpClient) { }

  public getCompanyFeatures(featuresRequest: CompanyFeaturesReqeust) {
    return this.httpClient.post<CompanyFeature[]>(this.baseUrl + "method=get_company_features", JSON.stringify(featuresRequest));
  }
}
