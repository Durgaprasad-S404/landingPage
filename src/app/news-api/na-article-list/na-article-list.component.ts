import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsApiService, Article } from '../news-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-na-article-list',
  templateUrl: './na-article-list.component.html',
  styleUrls: ['./na-article-list.component.css'],
})
export class NaArticleListComponent implements OnInit, OnDestroy {
  articles: Article[] = [
    {
      title: '',
      url: '',
      source: {
        name: '',
      },
    },
  ];

  articlesSubscription: Subscription = new Subscription();

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit() {
    this.articlesSubscription = this.newsApiService.pagesOutput.subscribe(
      (articles) => {
        this.articles = articles;
      }
    );

    this.newsApiService.getPage(1);
  }

  ngOnDestroy() {
    this.articlesSubscription.unsubscribe();
  }
}
