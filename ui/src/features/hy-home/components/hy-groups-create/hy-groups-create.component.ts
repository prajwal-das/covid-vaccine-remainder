import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../services/group.service';
import {Location} from '@angular/common';

@Component({
  selector: 'hy-groups-create',
  templateUrl: './hy-groups-create.component.html',
  styleUrls: ['./hy-groups-create.component.scss']
})
export class HyGroupsCreateComponent implements OnInit {

  group = {
    title: '',
    description: ''
  };

  constructor(private groupService: GroupService,
              private location: Location) {
  }

  ngOnInit(): void {
  }

  createGroup(): void {
    this.groupService.createGroup(this.group).subscribe((res) => {
      console.log(res);
      this.location.back();
    });
  }
}
