import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';

import { NewsStoriesComponent } from './news-stories.component';
import { NewsItemComponent } from '@components/news-item/news-item.component';
import { HackerNewsService } from '@services/hacker-news.service';

import { MockComponent } from 'ng-mocks';

import { of } from 'rxjs';

describe('NewsStoriesComponent', () => {
  let spectator: Spectator<NewsStoriesComponent>;
  const createComponent = createComponentFactory({
    component: NewsStoriesComponent,
    declarations: [
      MockComponent(NewsItemComponent)
    ],
    providers: [
      mockProvider(HackerNewsService, {
        getStories: () => { 
          return of([
            {
              by: 'user1',
              time: 'time1',
              title: 'title1',
              text: 'text1',
              url: 'url1'
            },
            {
              by: 'user2',
              time: 'time2',
              title: 'title2',
              text: 'text2',
              url: 'url2'
            }
          ]);
        }
      })
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should set up the screen with the correct titles and main wrapper', () => {
    const mainWrapper: HTMLElement | null = spectator.query('div');

    expect(mainWrapper).toHaveClass('row');
  });

  it('should set the correct attribute values on the news-stories child components', () => {
    const newsItems: Array<HTMLElement> = spectator.queryAll('news-item');

    expect(newsItems.length).toEqual(2);
  });
});