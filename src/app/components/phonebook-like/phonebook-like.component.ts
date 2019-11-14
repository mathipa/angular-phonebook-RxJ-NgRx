import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook-like',
  templateUrl: './phonebook-like.component.html',
  styleUrls: ['./phonebook-like.component.scss']
})
export class PhonebookLikeComponent implements OnInit {

  numberOfLikes: number = 0;

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
  }

  constructor() { }

  ngOnInit() {
  }

}
