import { Injectable } from '@angular/core';

import { NewsItemResponse, NewsItem } from '@models/news-item';

import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HackerNewsService {

  constructor(private db: AngularFireDatabase){}
  
  getNewestStories(limit: number): Observable<Array<number>> {
    return this.db.list<number>('/v0/newstories', ref => ref.limitToFirst(100))
      .valueChanges();
  }
  
  getItem(id: number): Observable<NewsItem> {
    return this.db.object<NewsItemResponse | null>('/v0/item/' + id)
      .valueChanges()
      .pipe(
        map(
          (newsItemResponse: NewsItemResponse | null) => {

            if (newsItemResponse) {
              const formattedNewsItem: NewsItem = {
                by: newsItemResponse.by,
                time: newsItemResponse.time,
                title: newsItemResponse.title,
                text: newsItemResponse.text ? newsItemResponse.text : ''
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