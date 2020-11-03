import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  title:string = "News component";

  news = [
    {
      url: '#',
      title: 'Noticia 1'
    },
    {
      url: '#',
      title: 'Noticia 2'
    },
    {
      url: '#',
      title: 'Noticia 3'
    },
    {
      url: '#',
      title: 'Noticia 4'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
