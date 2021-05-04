import {Component, Input, OnInit} from '@angular/core';
import * as shape from 'd3-shape';
import {Subject} from 'rxjs';

@Component({
  selector: 'hy-graph-view',
  templateUrl: './hy-graph-view.component.html',
  styleUrls: ['./hy-graph-view.component.scss']
})
export class HyGraphViewComponent implements OnInit {

  @Input()
  graph = {nodes: [], links: []};

  curve = shape.curveNatural;
  layout = 'colaForceDirected';
  update$: Subject<boolean> = new Subject();

  constructor() {
  }

  ngOnInit(): void {
  }

  doubleClick(node): void {
    const conn = {nodes: [], links: []};
    conn.nodes = this.graph.nodes.filter(d => d.id !== node.id);
    conn.links = this.graph.links.filter(d => !(d.source === node.id || d.target === node.id));
    this.graph = conn;
    this.update$.next(true);
  }

}
