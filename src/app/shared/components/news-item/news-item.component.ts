import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { faWarning, faArrowUpRightFromSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { HackerNewsService } from '@services/hacker-news.service';

import { NewsItem } from '@models/news-item';

import { NO_ARTICLE_URL_WARNING, FULL_ARTICLE_LINK } from '@constants/constants';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

/**
 * @component Takes a story id as an input then fetches the full story from that id and prints it
 * 
 */
export class NewsItemComponent {

  @Input()
  get id(): number { return this._id; }
  set id(id: number) {
    this._id = id;
    // A new id will continue to be generated as firebase receives new articles
    this.$newsItem = this.hackerNewsService.getItem(id); 
  }
  private _id: number;

  @Input() public showDescriptionText: boolean;

  public readonly fullArticleLink: string = FULL_ARTICLE_LINK;
  public readonly noArticleUrlWarning: string = NO_ARTICLE_URL_WARNING;

  public faWarning: IconDefinition = faWarning;
  public faArrowUpRightFromSquare: IconDefinition = faArrowUpRightFromSquare;
  public $newsItem: Observable<NewsItem>;

  constructor(private hackerNewsService: HackerNewsService) {}
  
}
