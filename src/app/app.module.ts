import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsItemComponent } from '@components/news-item/news-item.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: '<API_KEY>',
      projectId: "<PROJECT_ID>",
      databaseURL: 'https://hacker-news.firebaseio.com',
      authDomain: '<AUTH_DOMAIN>'
    }),
    AngularFirestoreModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
