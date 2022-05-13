import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TraerInfoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getInfo(path : String): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/${path}`);
  }

  public addInfo(path : String, info : any): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/${path}/add`, info);
  }

  public editInfo(path : String, info : any): Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${path}/edit`, info);
  }

  public deleteInfo(path : String, Id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${path}/delete/${Id}`);
  }

}