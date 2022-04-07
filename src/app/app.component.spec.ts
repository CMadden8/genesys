import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';
import { NewsStoriesComponent } from '@components/news-stories/news-stories.component';

import { APP_TITLE, BESTSTORIES_TITLE, RECENTSTORIES_TITLE, TOPSTORIES_TITLE } from '@constants/constants';

import { MockComponent } from 'ng-mocks';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      MockComponent(NewsStoriesComponent)
    ],
    schemas: [NO_ERRORS_SCHEMA] // TODO: try to remove this and import FontAwesomeModule instead (currently not working)
  });

  beforeEach(() => spectator = createComponent());

  it('should set up the screen with the correct titles and main wrapper', () => {
    const h2Tags: HTMLElement[] = spectator.queryAll('h2');

    const mainWrapper: HTMLElement | null = spectator.query('div');

    expect(h2Tags[0]).toHaveText(TOPSTORIES_TITLE);
    expect(h2Tags[1]).toHaveText(BESTSTORIES_TITLE);
    expect(h2Tags[2]).toHaveText(RECENTSTORIES_TITLE);

    expect(spectator.query('h1')).toHaveText(APP_TITLE);

    expect(mainWrapper).toHaveClass('container');
  });

});