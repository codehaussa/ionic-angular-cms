import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {GetAccountListRequest} from "../models/get-account-list-request";
// import {AccountListResponse, GetAccountListResponse} from "../models/get-account-list-response";
import {GetCustomerInfoRequest} from "../models/get-customer-info-request";
import {GetCustomerInfoResponse} from "../models/get-customer-info-response";
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortaoneService {
  public baseUrl = "https://codehaussa.com/cms/api/webservice.php?";

  constructor(private httpClient: HttpClient) {
   }

  public getCustomerInfo(getCustomerInfoRequest: GetCustomerInfoRequest): Observable<GetCustomerInfoResponse[]> {
    return this.httpClient.post<GetCustomerInfoResponse[]>(this.baseUrl + "method=portaOne_getCustomerInfo", JSON.stringify(getCustomerInfoRequest)).pipe(
        map(response => Object.assign(new Array<GetCustomerInfoResponse>(), response))
    );
  }

  public exportSelectedCustomer(selectedCustomerInfo: string): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + "method=portaOne_exportSelectedCustomer", selectedCustomerInfo);
  }
}
