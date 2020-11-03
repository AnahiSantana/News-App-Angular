import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getHeadlines(pais?):Promise<any> {
    if(!pais){
      return this.http.get('http://localhost:3000/api/topHeadlines').toPromise();
    }
    return this.http.get('http://localhost:3000/api/topHeadlines/'+pais).toPromise();
  }

  getEverything(q,source?):Promise<any> {
    if(!source){
      return this.http.get('http://localhost:3000/api/everything?q='+ q).toPromise();
    }
      return this.http.get('http://localhost:3000/api/everything?q='+ q + '&source=' + source).toPromise();
  }

  getSources():Promise<any> {
    return this.http.get('http://localhost:3000/api/sources').toPromise();
  }

}