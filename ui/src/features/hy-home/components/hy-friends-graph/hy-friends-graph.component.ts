import { Component, OnInit } from '@angular/core';
import {FriendsService} from '../../services/friends.service';

@Component({
  selector: 'hy-friends-graph',
  templateUrl: './hy-friends-graph.component.html',
  styleUrls: ['./hy-friends-graph.component.scss']
})
export class HyFriendsGraphComponent implements OnInit {

  connectionGraphs;

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friendsService.getFriendsConnections().subscribe((res) => {
      console.log(res);
      this.connectionGraphs = res.data;
    });
  }

}
