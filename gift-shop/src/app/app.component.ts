import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formCard: FormGroup;
  private visibilityFrom: boolean;

  constructor(){
    this.formCard = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userCardNumber': new FormControl('', Validators.required)
    })
  }

  getShoppingCard(){
    this.visibilityFrom = !this.visibilityFrom
  }

  submit(){
    this.visibilityFrom = !this.visibilityFrom;
  }
}
