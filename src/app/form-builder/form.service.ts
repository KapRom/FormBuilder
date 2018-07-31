import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {FrameStruct} from './form-builder.component';

@Injectable()
export class TransferService {

  // Observable string sources
  private frameSource = new Subject<FrameStruct[]>();

  // Observable string streams
  frame$ = this.frameSource.asObservable();

  // Service message commands
  sendFrame(frame: FrameStruct[]) {
    this.frameSource.next(frame);
  }
}
