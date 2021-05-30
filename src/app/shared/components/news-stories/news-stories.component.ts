import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { HackerNewsService } from '@services/hacker-news.service';
import { NewsType } from '@models/news-item';

import { Observable } from 'rxjs';

@Component({
  selector: 'news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.scss']
})

/**
 * @component that fetches all story ids and passes them to a child component news-item that renders the full story
 * 
 */
export class NewsStoriesComponent implements OnInit {

  @Input() limit: number;
  @Input() newsType: NewsType;
  @Input() colClasses: string;
  @Input() showDescriptionText: boolean;

  public $newsItemIds: Observable<Array<number>>;

  constructor(private hackerNewsService: HackerNewsService) {}

  ngOnInit() {
    this.$newsItemIds = this.hackerNewsService.getStories(this.newsType, this.limit);
  }

  /**
   * @param index is the index of the news story in the loop
   * @param id is the id of the news story in the loop
   * 
   * @returns a unique id that will let Angular know what has and hasn't changed in the DOM for performance
   */
  public trackByFn(index: number, id: number) {
    return id; 
  }
  
}
