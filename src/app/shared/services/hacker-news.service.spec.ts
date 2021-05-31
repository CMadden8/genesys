import { createServiceFactory, SpectatorService, mockProvider } from '@ngneat/spectator/jest';

import { HackerNewsService } from './hacker-news.service';

import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';

describe('AuthService', () => {

  let spectator: SpectatorService<HackerNewsService>;
  const createService = createServiceFactory({
    service: HackerNewsService,
    providers: [
      mockProvider(AngularFireDatabase, {
        list: jest.fn(() => ({
          valueChanges: jest.fn(
            () => new Observable((sub: any) => sub.next(Object.values({})))
          )
        })),  
        object: jest.fn(() => ({
          valueChanges: jest.fn(() => new Observable(sub => sub.next({})))
        }))  
      })
    ]
  });

  beforeEach(() => spectator = createService());

  it('should call getStories when getStories() is triggered', () => {
    const spy = jest.spyOn(spectator.service, 'getStories');

    spectator.service.getStories('topstories', 5);

    expect(spy).toHaveBeenCalled();
  });

  it('should call getItem when getItem() is triggered', () => {
    const spy = jest.spyOn(spectator.service, 'getItem');

    spectator.service.getItem(500000);

    expect(spy).toHaveBeenCalled();
  });

});