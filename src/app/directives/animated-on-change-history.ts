import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef, ContentChild } from '@angular/core';

@Directive({
  selector: '[appAnimatedOnChangeHistory]',
  standalone: true
})
export class AnimatedOnChangeHistory implements OnChanges {
  @Input() appAnimatedOnChangeHistory: any; 

  @ContentChild('dinamico', { static: true }) templateRef!: TemplateRef<any>;

  constructor(private viewContainer: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appAnimatedOnChangeHistory']) {
      this.viewContainer.clear();

      const hitoActual = changes['appAnimatedOnChangeHistory'].currentValue;

      if (hitoActual && this.templateRef) {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: hitoActual });
      }
    }
  }
}