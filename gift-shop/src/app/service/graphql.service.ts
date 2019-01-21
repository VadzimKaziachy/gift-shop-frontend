import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {map, pluck, shareReplay} from 'rxjs/operators';
import gql from 'graphql-tag';

import { Gift, Query } from '../models/model-db'

@Injectable({
  providedIn: 'root'
})
export class GraphqlService implements OnInit{

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {}
  getGifts() {
    return this.apollo.watchQuery<Query>({
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
  }

  getGift(gift_id:number){
    return this.apollo.watchQuery<Gift>({
      query: gql`
        query function($id: Int!) {
            gift (id: $id) {
                id
                title
                shortDescription
                fullDescription
              }
          } 
          `,
      variables: {
          id: gift_id
      }
    })
      .valueChanges
      .pipe(shareReplay(1)).pipe(pluck('data', 'gift'));
  }
}
