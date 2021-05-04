import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FriendsService} from '../../services/friends.service';

@Component({
  selector: 'hy-select-friends',
  templateUrl: './hy-select-friends.component.html',
  styleUrls: ['./hy-select-friends.component.scss']
})
export class HySelectFriendsComponent implements OnInit {

  friends: any;

  selectedFriends = [];

  constructor(
    private friendsService: FriendsService,
    public dialogRef: MatDialogRef<HySelectFriendsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.friendsService.getMyFriends().subscribe(res => {
      this.friends = res.data;
      console.log(this.friends);
      this.selectedFriends = this.friends.map(d => false);
      console.log(this.selectedFriends);
    });
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClicked(): void {
    const selFrds = [];
    for (let i = 0; i < this.selectedFriends.length; i++) {
      if (this.selectedFriends[i]) {
        selFrds.push(this.friends[i]);
      }
    }

    this.dialogRef.close(selFrds);
  }
}
