import {Component, Input, OnInit} from '@angular/core';
import {FriendsService} from '../../services/friends.service';

@Component({
  selector: 'hy-friend-card',
  templateUrl: './hy-friend-card.component.html',
  styleUrls: ['./hy-friend-card.component.scss']
})
export class HyFriendCardComponent implements OnInit {

  @Input()
  friend;

  @Input()
  friendRequest = false;

  constructor(private friendService: FriendsService) {
  }

  ngOnInit(): void {
  }

  sendFriendRequest(): void {
    this.friendService.sendFriendRequest(this.friend.id).subscribe(res => {
      this.friend.friendsStatus = 'REQUEST_PENDING';
    });
  }

  acceptFriendRequest(): any {
    this.friendService.acceptFriendRequest(this.friend.id).subscribe(res => {
      this.friend.friendsStatus = 'ACCEPTED';
    });
  }
}
