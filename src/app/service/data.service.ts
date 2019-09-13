import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../product';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'http://localhost:5555/product';
  constructor(private _http: HttpClient) { }

  getdata(){
    return this._http.get(this.url);
  }

  
}
