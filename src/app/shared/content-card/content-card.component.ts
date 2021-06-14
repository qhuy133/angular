import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { BaseModel } from 'src/app/types/model'
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content: BaseModel
  faHeart = faHeart
  constructor() { }

  ngOnInit() {
  }

}
