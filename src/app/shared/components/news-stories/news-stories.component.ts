import { Component, OnInit } from '@angular/core';

import { HackerNewsService } from '@services/hacker-news.service';

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

  public $newsItemIds: Observable<Array<number>>;

  constructor(private hackerNewsService: HackerNewsService) {}

  ngOnInit() {
    this.$newsItemIds = this.hackerNewsService.getStories('newstories');
  }

  /**
   * @param index is the index of the news story in the loop
   * @param id is the id of the news story in the loop
   * 
   * @returns an id that will let Angular know what has and hasn't changed in the DOM for performance
   */
  public trackByFn(index: number, id: number) {
    return id; 
  }
  
}
