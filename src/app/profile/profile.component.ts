import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query/query.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private queryService: QueryService
  ) { }

  ngOnInit() {
  }

}
