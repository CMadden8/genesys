import { Component } from '@angular/core';

import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import { NewsHeading, NewsStoriesConfig, NewsTypeName } from '@models/news-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * @component Prints the main 3 sections: top stories, best stories, recent stories
 * 
 */
export class AppComponent {

  public faNewspaper = faNewspaper;

  public newsStoriesConfig: Required<NewsStoriesConfig[]> = [
    {
      headingText: NewsHeading.TOPSTORIES,
      newsType: NewsTypeName.TOPSTORIES,
      limit: 4,
      colClasses: 'col-sm-12 col-md-6 col-lg-3',
      showDescriptionText: false
    },
    {
      headingText: NewsHeading.BESTSTORIES,
      newsType: NewsTypeName.BESTSTORIES,
      limit: 4,
      colClasses: 'col-sm-12 col-md-6 col-lg-3',
      showDescriptionText: false
    },
    {
      headingText: NewsHeading.RECENTSTORIES,
      newsType: NewsTypeName.NEWSTORIES,
      limit: 50,
      colClasses: 'col-12',
      showDescriptionText: true
    }
  ];

  constructor() {}
  
}
