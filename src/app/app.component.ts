import { Component, OnInit } from '@angular/core';

import { HackerNewsService } from '@services/hacker-news.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * @component that fetches all story ids and passes them to a child component news-item that renders the full story
 * 
 */
export class AppComponent implements OnInit {

  constructor(private hackerNewsService: HackerNewsService) {}

  ngOnInit() {
    //this.$newsItemIds = this.hackerNewsService.getStories('newstories');
  }
  
}
