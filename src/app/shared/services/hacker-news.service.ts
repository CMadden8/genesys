import { Injectable } from '@angular/core';

import { NewsItemResponse, NewsItem, NewsType } from '@models/news-item';

import { AngularFireDatabase } from '@angular/fire/database';

import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})

/**
 * @service Fetches an array of story ids and also fetches the full story using these ids
 * 
 */
export class HackerNewsService {

  constructor(private db: AngularFireDatabase){}
  
  /**
   *  @param newsType One of the 3 types of news that can be fetched
   *  @param limit The max number of news items to retrieve
   * 
   * @returns An observable of news story ids used to fetch individual new stories
   */
  public getStories(newsType: NewsType, limit: number): Observable<number[]> {
    return this.db.list<number>(`/v0/${newsType}`, ref => ref.limitToFirst(limit))
      .valueChanges();
  }
  
  /**
   * @param id The id of the news story that's used to fetch a full news story in the format of NewsItemResponse
   * 
   * @returns A formatted version of NewsItemResponse that has only the fields needed for printing in the UI
   */
  public getItem(id: number): Observable<NewsItem> {
    return this.db.object<NewsItemResponse | null>('/v0/item/' + id)
      .valueChanges()
      .pipe(
        // A number of the news items return null even with a correct id, so these are filtered out
        filter(newsItemResponse => newsItemResponse !== null),
        map(
          (newsItemResponse) => {

            // Occassionally url and text are undefined keys of newsItemReponse, so default them to ''
            if (newsItemResponse) {
              const { by, time, title, url = '', text = '' } = newsItemResponse;

              const formattedNewsItem: NewsItem = {
                by,
                time: moment.unix(time).format('ddd D MMM YYYY H:mm'),
                title,
                text,
                url
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