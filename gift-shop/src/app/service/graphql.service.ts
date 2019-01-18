import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { Gift, Query } from '../models/model-db'

@Injectable({
  providedIn: 'root'
})
export class GraphqlService implements OnInit{
  private gifts: Observable<Gift[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {}
  getGifts() {
    this.gifts = this.apollo.watchQuery<Query>({
      query: gql`
        query  {
            allGifts   {
              id
              title
              shortDescription
            }
          } 
          `
    })
      .valueChanges
      .pipe(
        map(result => result.data.allGifts)
      );
    return this.gifts
  }
}
