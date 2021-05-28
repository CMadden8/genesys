import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

import { HackerNewsService } from '@services/hacker-news.service';

import { NewsItem } from '@models/news-item';

import { Observable } from 'rxjs';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})

export class NewsItemComponent implements OnChanges {

  @Input() id: number;

  public $newsItem: Observable<NewsItem>;

  constructor(private hackerNewsService: HackerNewsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && changes['id'].currentValue) {

      const id: number = changes['id'].currentValue;
      
      this.$newsItem = this.hackerNewsService.getItem(id);

    }
  }
  
}
