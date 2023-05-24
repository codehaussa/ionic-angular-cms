import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {GetAccountListRequest} from "../models/get-account-list-request";
import {AccountListResponse, GetAccountListResponse} from "../models/get-account-list-response";
import {GetCustomerInfoRequest} from "../models/get-customer-info-request";

@Injectable({
  providedIn: 'root'
})
export class PortaoneService {
  public baseUrl = "https://codehaussa.com/cms/api/webservice.php?";

  constructor(private httpClient: HttpClient) { }

  public getCustomerInfo(getCustomerInfoRequest: GetCustomerInfoRequest): Observable<any> {
    return this.httpClient.post<AccountListResponse>(this.baseUrl + "method=portaOne_getCustomerInfo",JSON.stringify(getCustomerInfoRequest));
  }

  public getAccountList(getAccountListRequest: GetAccountListRequest): Observable<any> {
    return this.httpClient.post(this.baseUrl + "method=portaOne_getAccountList",JSON.stringify(getAccountListRequest));
  }
}
