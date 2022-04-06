import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { HackerNewsService } from '@services/hacker-news.service';
import { NewsType } from '@models/news-item';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

/**
 * @component Fetches all story ids and passes them to a child component news-item that renders the full story
 * 
 */
export class NewsStoriesComponent implements OnInit {

  @Input() public colClasses: string;
  @Input() public limit: number;
  @Input() public newsType: NewsType;
  @Input() public showDescriptionText: boolean;

  public $newsItemIds: Observable<number[]>;

  constructor(private hackerNewsService: HackerNewsService) {}

  ngOnInit() {
    this.$newsItemIds = this.hackerNewsService.getStories(this.newsType, this.limit);
  }

  /**
   * @param index The index of the news story in the loop
   * @param id The id of the news story in the loop
   * 
   * @returns A unique id that will let Angular know what has and hasn't changed in the DOM for performance
   */
  public trackByFn(index: number, id: number): number {
    return id; 
  }
  
}
