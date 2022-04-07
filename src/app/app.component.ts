import { Component } from '@angular/core';

import { faNewspaper, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { NewsStoriesConfig, NewsTypeName } from '@models/news-item';

import { APP_TITLE, BESTSTORIES_LIMIT, BESTSTORIES_TITLE, RECENTSTORIES_LIMIT, 
  RECENTSTORIES_TITLE, TOPSTORIES_LIMIT, TOPSTORIES_TITLE } from '@constants/constants';

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

  public readonly appTitle: string = APP_TITLE;

  public faNewspaper: IconDefinition = faNewspaper;

  public newsStoriesConfig: Required<NewsStoriesConfig[]> = [
    {
      headingText: TOPSTORIES_TITLE,
      newsType: NewsTypeName.TOPSTORIES,
      limit: TOPSTORIES_LIMIT,
      colClasses: 'col-sm-12 col-md-6 col-lg-3',
      showDescriptionText: false
    },
    {
      headingText: BESTSTORIES_TITLE,
      newsType: NewsTypeName.BESTSTORIES,
      limit: BESTSTORIES_LIMIT,
      colClasses: 'col-sm-12 col-md-6 col-lg-3',
      showDescriptionText: false
    },
    {
      headingText: RECENTSTORIES_TITLE,
      newsType: NewsTypeName.NEWSTORIES,
      limit: RECENTSTORIES_LIMIT,
      colClasses: 'col-12',
      showDescriptionText: true
    }
  ];

  constructor() {}
  
}
