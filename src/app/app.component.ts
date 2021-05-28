import { Component, OnInit } from '@angular/core';

import { HackerNewsService } from '@services/hacker-news.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  $newsItemIds: Observable<Array<number>>;

  constructor(private hackerNewsService: HackerNewsService) {}

  ngOnInit() {
    this.$newsItemIds = this.hackerNewsService.getNewestStories(100);
  }
  
}
