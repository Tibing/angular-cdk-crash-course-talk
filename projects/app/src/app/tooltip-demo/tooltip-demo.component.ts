import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.css'],
})
export class TooltipDemoComponent implements OnInit {

  @ViewChild('tooltip', { read: TemplateRef }) dialog: TemplateRef<any>;
  @ViewChild('host', { read: ElementRef, static: true }) host: ElementRef;

  private ref: OverlayRef;

  constructor(private overlay: Overlay,
              private positionBuilder: OverlayPositionBuilder,
              private vcr: ViewContainerRef) {
  }

  ngOnInit(): void {
    const mouseenter$ = fromEvent(this.host.nativeElement, 'mouseenter');
    const mouseleave$ = fromEvent(this.host.nativeElement, 'mouseleave');

    mouseenter$.subscribe(() => {
      this.ref = this.overlay.create({
        positionStrategy: this.positionBuilder
          .flexibleConnectedTo(this.host.nativeElement)
          .withPositions([{ overlayX: 'start', originX: 'end', overlayY: 'center', originY: 'center' }]),
        scrollStrategy: this.overlay.scrollStrategies.reposition()
      });

      const userProfilePortal = new TemplatePortal(this.dialog, this.vcr);
      this.ref.attach(userProfilePortal);
    });

    mouseleave$.subscribe(() => this.ref.dispose());
  }
}
