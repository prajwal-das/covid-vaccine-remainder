import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[hyTemplate]'
})
export class HyTemplateDirective {

  @Input()
  hyTemplate: string;

  constructor(public template: TemplateRef<any>) {
  }

}
