import { Component } from '@angular/core';

import { NewsStoriesConfig } from '@models/news-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * @component that prints the main 3 sections: top stories, best stories, recent stories
 * 
 */
export class AppComponent {

  public newsStoriesConfig: Required<Array<NewsStoriesConfig>> = [
    {
      headingText: 'Top Stories',
      newsType: 'topstories',
      limit: 4,
      colClasses: 'col-sm-12 col-md-6 col-lg-3',
      showDescriptionText: false
    },
    {
      headingText: 'Best Stories',
      newsType: 'beststories',
      limit: 4,
      colClasses: 'col-sm-12 col-md-6 col-lg-3',
      showDescriptionText: false
    },
    {
      headingText: 'Recent Stories',
      newsType: 'newstories',
      limit: 50,
      colClasses: 'col-12',
      showDescriptionText: true
    }
  ];

  constructor() {}
  
}
