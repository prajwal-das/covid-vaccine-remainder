import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GroupService} from '../../services/group.service';
import {MatDialog} from '@angular/material/dialog';
import {HySelectFriendsComponent} from '../hy-select-friends/hy-select-friends.component';
import {HyGroupInfoComponent} from '../hy-group-info/hy-group-info.component';

@Component({
  selector: 'hy-groups-list',
  templateUrl: './hy-groups-list.component.html',
  styleUrls: ['./hy-groups-list.component.scss']
})
export class HyGroupsListComponent implements OnInit {

  @Output()
  selectGroup = new EventEmitter<any>();

  groups = [];
  currGroup;

  constructor(private groupService: GroupService,
              public dialog: MatDialog) {
    this.getGroups();
  }

  ngOnInit(): void {
  }


  groupInfo(group: any): void {
    const dialogRef = this.dialog.open(HyGroupInfoComponent, {
      width: '450px',
      data: group
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log();
      }
    });
  }

  inviteFriends(group: any): void {
    const dialogRef = this.dialog.open(HySelectFriendsComponent, {
      width: '450px',
      data: group
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.groupService.addCharMembers(group.id, result.map(r => r.id)).subscribe(res => {
          console.log(res);
        });
      }
    });
  }

  getGroups(): void {
    this.groupService.getGroups().subscribe((res) => {
      this.groups = res.data;
      if(!this.currGroup) {
        this.currGroup = this.groups[0];
        this.selectGroup.emit(this.groups[0]);
      }
      console.log(res);
    });
  }

  groupSelected(value: any): any {
    this.getGroups();
    this.currGroup = value;
    this.selectGroup.emit(value);
  }
}
