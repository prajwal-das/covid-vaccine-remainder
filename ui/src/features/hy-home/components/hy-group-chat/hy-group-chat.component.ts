import {Component, Input, OnInit} from '@angular/core';
import {GroupService} from '../../services/group.service';
import {AuthService} from '../../../hy-auth/services/auth.service';

@Component({
  selector: 'hy-group-chat',
  templateUrl: './hy-group-chat.component.html',
  styleUrls: ['./hy-group-chat.component.scss']
})
export class HyGroupChatComponent implements OnInit {

  @Input()
  group;

  @Input()
  chats = [];

  message = '';
  currUserId;

  constructor(private groupService: GroupService,
              private authService: AuthService) {
    this.currUserId = this.authService.userData.uid;
  }

  ngOnInit(): void {
  }

  postChat(): void {
    this.groupService.addChatMessage(this.group.id, this.message).subscribe((res) => {
      this.chats.push(res.data);
      this.message = '';
    });
  }
}
