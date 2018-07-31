import {Component, Input, OnInit} from '@angular/core';
import {FrameStruct} from '../form-builder/form-builder.component';

export interface ReadyFormDataStruct {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-form-filler',
  templateUrl: './form-filler.component.html',
  styleUrls: ['./form-filler.component.css']
})
export class FormFillerComponent implements OnInit {

  @Input() frames: FrameStruct[];

  enteredAnswer: string[] = [];
  readyFormData: ReadyFormDataStruct[] = [];
  dataJson: string;

  constructor() {
  }

  ngOnInit() {
    console.log(this.frames.length);
    this.enteredAnswer = new Array(this.frames.length);
  }

  subItemVisible(enteredAnswer: string, frame: FrameStruct) {

    if (frame.condition === undefined) {
      return 1;
    }
    if (frame.condition === 'Greater than') {
      return enteredAnswer > frame.answer;
    }
    if (frame.condition === 'Equals') {
      return enteredAnswer === frame.answer;
    }
    if (frame.condition === 'Less than') {
      return enteredAnswer < frame.answer;
    }
  }

  createForm() {
    console.log(this.frames.length);
    console.log(this.readyFormData);
    for (let i = 0; i < this.frames.length; i++) {
      this.readyFormData.push({
        question: this.frames[i].question,
        answer: this.enteredAnswer[i]
      });
    }
    this.dataJson = JSON.stringify(this.readyFormData);
    console.log(this.dataJson);
  }
}
