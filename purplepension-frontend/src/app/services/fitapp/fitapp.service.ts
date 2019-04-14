import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FitappService {

  private baseUrl: String = "http://localhost:3000/api/fitapp";
  
  constructor(private httpClient : HttpClient) {
  }

  public getStats() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.httpClient.get(this.baseUrl + '/stats', httpOptions);
  }

  public getActivities() {
    return this.httpClient.get(this.baseUrl + '/activity');
  }
}
