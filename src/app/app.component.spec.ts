import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';
import { NewsStoriesComponent } from '@components/news-stories/news-stories.component';

import { MockComponent } from 'ng-mocks';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      MockComponent(NewsStoriesComponent)
    ],
    schemas: [NO_ERRORS_SCHEMA]
  });

  beforeEach(() => spectator = createComponent());

  it('should set up the screen with the correct titles and main wrapper', () => {
    const h2Tags: Array<HTMLElement> = spectator.queryAll('h2');

    const mainWrapper: HTMLElement | null = spectator.query('div');

    expect(h2Tags[0]).toHaveText('Top Stories');
    expect(h2Tags[1]).toHaveText('Best Stories');
    expect(h2Tags[2]).toHaveText('Recent Stories');

    expect(spectator.query('h1')).toHaveText('Hacker News');

    expect(mainWrapper).toHaveClass('container');
  });

});