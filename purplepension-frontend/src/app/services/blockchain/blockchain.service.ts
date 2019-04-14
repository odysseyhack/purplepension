import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlockchainService {
  private baseUrl: String = "http://localhost:3000/api/activity/events";
  constructor(private httpClient: HttpClient) {}

  public getSignEvents() {
    return this.httpClient.get(`${this.baseUrl}/sign`);
  }
  public getDataViewEvents() {
    return this.httpClient.get(`${this.baseUrl}/access`);
  }
}
