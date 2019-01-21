import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {GraphqlService} from "../service/graphql.service";
import {Gift} from '../models/model-db'
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-blog-inner-page',
  templateUrl: './blog-inner-page.component.html',
  styleUrls: ['./blog-inner-page.component.scss']
})
export class BlogInnerPageComponent implements OnInit {
  private id: number;
  private subscription: Subscription;
  private gift: Observable<any>;

  constructor(private activateRoute: ActivatedRoute, private service: GraphqlService, private app: AppComponent) {
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit() {
    this.gift = this.service.getGift(this.id)
  }

  private buy(){
    this.app.getShoppingCard()
  }
}
