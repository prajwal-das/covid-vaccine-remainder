import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../services/group.service';

@Component({
  selector: 'hy-groups-graph',
  templateUrl: './hy-groups-graph.component.html',
  styleUrls: ['./hy-groups-graph.component.scss']
})
export class HyGroupsGraphComponent implements OnInit {

  connectionGraphs = {nodes: [], links: []};

  constructor(private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.groupService.getGroupsConnections().subscribe((res) => {
      console.log(res);
      this.connectionGraphs = res.data;
    });
  }
}
