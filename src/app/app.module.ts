import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsItemComponent } from '@components/news-item/news-item.component';
import { NewsStoriesComponent } from '@components/news-stories/news-stories.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    NewsStoriesComponent
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: '<API_KEY>',
      projectId: "<PROJECT_ID>",
      databaseURL: 'https://hacker-news.firebaseio.com',
      authDomain: '<AUTH_DOMAIN>'
    }),
    AngularFirestoreModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
