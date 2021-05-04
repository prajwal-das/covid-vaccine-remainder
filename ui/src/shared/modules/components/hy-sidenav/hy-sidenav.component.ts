import {AfterContentInit, Component, ContentChildren, OnInit, QueryList, TemplateRef} from '@angular/core';
import {HyTemplateDirective} from '../../directives/hy-template.directive';

@Component({
  selector: 'hy-sidenav',
  templateUrl: './hy-sidenav.component.html',
  styleUrls: ['./hy-sidenav.component.scss']
})
export class HySidenavComponent implements OnInit, AfterContentInit {

  sidebar: TemplateRef<any>;
  content: TemplateRef<any>;
  logo: TemplateRef<any>;
  toolbar: TemplateRef<any>;

  sideBarOpen = true;

  @ContentChildren(HyTemplateDirective)
  templates: QueryList<HyTemplateDirective>;


  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.templates.forEach(tem => {
      switch (tem.hyTemplate) {
        case 'content':
          this.content = tem.template;
          break;
        case 'sidebar':
          this.sidebar = tem.template;
          break;
        case 'logo':
          this.logo = tem.template;
          break;
        case 'toolbar':
          this.toolbar = tem.template;
          break;
      }
    });
  }
}
