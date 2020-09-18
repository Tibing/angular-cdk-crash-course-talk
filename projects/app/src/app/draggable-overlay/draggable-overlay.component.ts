import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-draggable-overlay',
  templateUrl: './draggable-overlay.component.html',
  styleUrls: ['./draggable-overlay.component.css']
})
export class DraggableOverlayComponent {

  @ViewChild('dialog', { read: TemplateRef }) dialog: TemplateRef<any>;

  private ref: OverlayRef;

  constructor(private overlay: Overlay,
              private positionBuilder: OverlayPositionBuilder,
              private vcr: ViewContainerRef) {
  }

  show(): void {
    this.ref = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.positionBuilder.global()
        .centerHorizontally()
        .centerVertically(),
    });

    const userProfilePortal = new TemplatePortal(this.dialog, this.vcr);
    this.ref.attach(userProfilePortal);
  }

  close(): void {
    this.ref.dispose();
  }
}
