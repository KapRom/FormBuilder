import {Component, DoCheck, OnInit} from '@angular/core';
import {TransferService} from './form-builder/form.service';
import {FrameStruct} from './form-builder/form-builder.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransferService]
})
export class AppComponent {
  title = 'Forms';

  frames: FrameStruct[] = [];

  constructor(private frameService: TransferService) {
    frameService.frame$.subscribe(
      frame => {
        this.frames = this.frames.concat(frame);
        console.log(this.frames);
      });
  }
}
