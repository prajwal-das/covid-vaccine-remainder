import {Component, OnDestroy, OnInit} from '@angular/core';
import {GroupService} from '../../services/group.service';
import {interval} from 'rxjs';

@Component({
  selector: 'hy-groups',
  templateUrl: './hy-groups.component.html',
  styleUrls: ['./hy-groups.component.scss']
})
export class HyGroupsComponent implements OnInit, OnDestroy {

  selectedGroup;
  chats = [];
  chatSub;

  constructor(private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.chatSub = interval(5000)
      .subscribe((val) => {
        this.getChats();
      });
  }

  getChats(): void {
    if (this.selectedGroup) {
      this.groupService.getGroupChat(this.selectedGroup.id).subscribe(res => {
        this.chats = res.data;
      });
    }
  }

  groupSelectChange(event): void {
    this.selectedGroup = event;
    this.getChats();
  }

  ngOnDestroy(): void {
    this.chatSub.unsubscribe();
  }
}
