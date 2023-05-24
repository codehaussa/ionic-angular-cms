import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginRequest} from "../models/login-request";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public baseUrl = "https://codehaussa.com/cms/api/webservice.php?";
  constructor(private httpClient: HttpClient) { }

  public loginUser(loginRequest: LoginRequest): Observable<any> {
    return this.httpClient.post(this.baseUrl + "method=login", JSON.stringify(loginRequest));
  }
}
