import { Component, OnChanges, OnInit } from '@angular/core';
import { NewsService } from '../../globals/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit, OnChanges {

  news:any[] = [];
  pais:string= "mx";
 
  constructor(private newsService:NewsService) { 
    this.newsService = newsService;
  }

  ngOnInit(): void {
    this.newsService.getHeadlines()
    .then(data => {
      this.news = data;
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  
  ngOnChanges() {
    this.newsService.getHeadlines(this.pais)
    .then(data => {
      this.news = data;
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

}
