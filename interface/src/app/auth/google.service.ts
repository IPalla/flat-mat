import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  dataUrl: string = 'http://localhost:8080/auth/google-login?access_token=';

  constructor(private http: HttpClient) { }

  public login(authToken: string){
    return this.http.get(this.dataUrl+authToken).subscribe(data=>console.log(data));
  }
}
