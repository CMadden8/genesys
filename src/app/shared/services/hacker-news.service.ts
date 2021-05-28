import { Injectable } from '@angular/core';

import { NewsItemResponse, NewsItem } from '@models/news-item';

import { AngularFireDatabase } from '@angular/fire/database';

import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})

export class HackerNewsService {

  constructor(private db: AngularFireDatabase){}
  
  /**
   * @returns observable of news story ids used to fetch individual new stories
   */
  public getNewestStories(): Observable<Array<number>> {
    return this.db.list<number>('/v0/newstories', ref => ref.limitToFirst(100))
      .valueChanges();
  }
  
  /**
   * @param id is the id of the news story that's used to fetch a full news story in the format of NewsItemResponse
   * 
   * @returns a formatted version of NewsItemResponse that has only the fields needed for printing in the UI
   */
  public getItem(id: number): Observable<NewsItem> {
    return this.db.object<NewsItemResponse | null>('/v0/item/' + id)
      .valueChanges()
      .pipe(
        // a number of the news items return null even with a correct id, so these are filtered out
        filter(newsItemResponse => newsItemResponse !== null),
        map(
          (newsItemResponse) => {

            if (newsItemResponse) {
              const formattedNewsItem: NewsItem = {
                by: newsItemResponse.by,
                time: moment.unix(newsItemResponse.time),
                title: newsItemResponse.title,
                text: newsItemResponse.text ? newsItemResponse.text : '',
                url: newsItemResponse.url
              }
              
              return formattedNewsItem;

            } else {
              throw new Error(`There was no news item in the response for id ${id}`);
            };

          }
        )
      );
  }
}