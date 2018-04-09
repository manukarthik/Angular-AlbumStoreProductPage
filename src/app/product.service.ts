import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import {  } from "module";
@Injectable()
export class ProductService {
private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) { }
//let Id = identity<number>("id");
  id: number;
  getAlbum(id){
    this._http.get(this._albumUrl).subscribe(response => {
   this._albumUrl = response.json();
    })
  }
}
