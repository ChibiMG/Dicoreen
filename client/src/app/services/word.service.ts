import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Word } from '../classes/word';

const  httpOptions = {
  headers: new HttpHeaders ( {'accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private basedURL = 'http://vps-920f8eab.vps.ovh.net/words/';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.basedURL, httpOptions);
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.basedURL + id);
  }

  post(word: Word): Observable<any> {
    return this.http.post(this.basedURL, word);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.basedURL + id);
  }

  put(id: number, word: Word): Observable<any> {
    return this.http.put(this.basedURL + id, word);
  }
}