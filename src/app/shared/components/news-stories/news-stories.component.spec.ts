import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';

import { NewsStoriesComponent } from './news-stories.component';
import { NewsItemComponent } from '@components/news-item/news-item.component';
import { HackerNewsService } from '@services/hacker-news.service';

import { MockComponent } from 'ng-mocks';

import { getStoriesMock } from 'src/jest-helpers'

describe('NewsStoriesComponent', () => {
  let spectator: Spectator<NewsStoriesComponent>;
  const createComponent = createComponentFactory({
    component: NewsStoriesComponent,
    declarations: [
      MockComponent(NewsItemComponent)
    ],
    providers: [
      mockProvider(HackerNewsService, getStoriesMock)
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should set up the screen with the correct main wrapper', () => {
    const mainWrapper: HTMLElement | null = spectator.query('div');

    expect(mainWrapper).toHaveClass('row');
  });

  
  it('should print 5 news-item child components if 5 ids were returned in getStories()', () => {
    const newsItems: Array<HTMLElement> = spectator.queryAll('app-news-item');

    expect(newsItems.length).toEqual(5);
  });

});