import { of } from 'rxjs';

export const getStoriesMock = {
  getStories: () => { 
    return of([
      100000,
      200000,
      300000,
      400000,
      500000,
    ]);
  }
}

export const getItemMock = {
  getItem: () => { 
    return of(
      {
        by: 'user1',
        time: 'time1',
        title: 'title1',
        text: 'text1',
        url: 'url1'
      },
    );
  }
}
