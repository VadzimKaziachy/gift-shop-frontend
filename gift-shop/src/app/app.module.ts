import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { ApolloModule, Apollo} from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InMemoryCache} from "apollo-cache-inmemory";
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogInnerPageComponent } from './blog-inner-page/blog-inner-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const appRouts: Routes = [
  {path:'', component: BlogPageComponent},
  {path:'gift/:id', component: BlogInnerPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    BlogInnerPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    RouterModule.forRoot(appRouts),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor ( apollo: Apollo, httpLink: HttpLink ) {
    apollo.create({
      link: httpLink.create({uri: 'http://localhost:8000/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
