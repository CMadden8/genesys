import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';

import { NewsItemComponent } from './news-item.component';
import { HackerNewsService } from '@services/hacker-news.service';

import { FULL_ARTICLE_LINK } from '@constants/constants';

import { getItemMock } from 'src/jest-helpers';

import { MockComponent } from 'ng-mocks';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('NewsItemComponent', () => {
  let spectator: Spectator<NewsItemComponent>;
  const createComponent = createComponentFactory({
    component: NewsItemComponent,
    declarations: [
      MockComponent(NewsItemComponent)
    ],
    providers: [
      mockProvider(HackerNewsService, getItemMock)
    ],
    imports: [NgbModule],
    schemas: [NO_ERRORS_SCHEMA] // TODO: try to remove this and import FontAwesomeModule instead (currently not working)
  });

  beforeEach(() => spectator = createComponent());

  it('should set the correct text when an id is passed from the input and when showDescription text is set to true', () => {
    spectator.setInput('id', 100000);
    spectator.setInput('showDescriptionText', true);

    const h3: HTMLElement | null = spectator.query('h3');
    const h4: HTMLElement | null = spectator.query('h4');
    const textSnippet: HTMLElement | null = spectator.query('.text-snippet');
    const button: HTMLElement | null = spectator.query('.btn-primary');

    expect(h3).toHaveText('title1');
    expect(h4).toHaveText('Posted by user1 on time1');
    expect(textSnippet).toHaveText('text1');
    expect(button).toHaveText(FULL_ARTICLE_LINK);
  });

});