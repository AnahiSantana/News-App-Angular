import { Component, OnChanges, OnInit } from '@angular/core';
import { NewsService } from '../../globals/services/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


export class NewsComponent implements OnInit, OnChanges {

  title:string = "News component";

  news:any[] = [];
  sources:any[] = [];

  busqueda:string = "";
  fuente:string = "";

 
  constructor(private newsService:NewsService) { 
    this.newsService = newsService;
  }

  ngOnInit(): void {
    this.newsService.getSources()
    .then(data => {
      this.sources = data;
    }).catch(err => {
      console.log(err);
    });
  }

  ngOnChanges() {}

  doSearch() {
    this.newsService.getEverything(this.busqueda,this.fuente)
    .then(data => {
      this.news = data;
    }).catch(err => {
      console.log(err);
    });
  }

}
