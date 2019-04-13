// import { Injectable } from '@angular/core';
// import { Observable, observable } from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

// import { Headers, Http, ResponseType, RequestOptions} from '@angular/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private http: Http) { }

//   //API urls
//   private TokenAPI = 'http://192.168.17.10:8080/explorer/user/login';

//   login(Mail: string, Password: string): Observable<> {
    
//     //Making headers for API -> data becomes key and value separated by '&' when there are multiple data
//     var headersForTokenAPI = new Headers({'Content-Type': 'application/json'});
//     //Allowing CORS-policy
//     headersForTokenAPI.append('Access-Control-Allow-Origin', '*');
//     //Data to send to API
//     var loginRequest = new loginDTO(Mail, Password);
    
//     //Post-request
//     return this.http.post(this.TokenAPI, JSON.stringify(loginRequest), { headers: headersForTokenAPI })
//       .map(res => res.json());
//   }
// }
