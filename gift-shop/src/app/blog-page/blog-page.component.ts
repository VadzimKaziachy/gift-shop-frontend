import { Component, OnInit } from '@angular/core';
import {GraphqlService} from "../service/graphql.service";
import { AppComponent} from "../app.component";
import {Gift} from '../models/model-db'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  gifts: Observable<Gift[]>;
  constructor(private service: GraphqlService, private app: AppComponent) { }

  ngOnInit() {
    this.gifts = this.service.getGifts()
  }

  private buy(){
    this.app.getShoppingCard()
  }
}
