import {Component, OnInit} from '@angular/core';
import {FriendsService} from '../../services/friends.service';

@Component({
  selector: 'hy-friends',
  templateUrl: './hy-friends.component.html',
  styleUrls: ['./hy-friends.component.scss']
})
export class HyFriendsComponent implements OnInit {

  friends = [];
  key = '';
  hideSearch = true;
  friendRequest = false;

  constructor(private friendService: FriendsService) {
    this.getFriends();
  }

  ngOnInit(): void {
  }

  toggleSearch(): void {
    this.hideSearch = !this.hideSearch;
    this.friends = [];
  }

  reset(hide = true): void {
    this.friendRequest = false;
    this.hideSearch = hide;
    this.friends = [];
    this.key = '';
  }

  getFriends(): void {
    this.reset();
    this.friendService.getMyFriends().subscribe(res => {
      this.friends = res.data;
      console.log(this.friends);
    });
  }

  updateKey(event): void {
    this.key = event.value;
  }

  getAllFriends(): void {
    this.friends = [];
    this.friendService.searchUsers(this.key).subscribe(res => {
      this.friends = res.data;
      console.log(this.friends);
    });
  }

  getAllFriendRequests(): void {
    this.reset();
    this.friendRequest = true;
    this.friendService.getAllFriendRequests().subscribe(res => {
      this.friends = res.data;
      console.log(this.friends);
    });
  }
}
