import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TransferService } from './form.service';

export interface Type {
  value: string;
}

export interface ConditionAnswerStruct {
  displayValue: string;
  value: string;
}

export interface FrameStruct {
  condition: string;
  answer: string;
  question: string;
  type: string;
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})

export class FormBuilderComponent implements OnInit {

  @Input() receivedType: string;

  questionFormControl = new FormControl('', [
    Validators.required,
  ]);

  types: Type[] = [
    { value: 'Text'},
    { value: 'Number'},
    { value: 'Yes/No'}
  ];

  numberConditions: ConditionAnswerStruct[] = [
    { displayValue: 'Equals', value: '=='},
    { displayValue: 'Greater than', value: '>'},
    { displayValue: 'Less than', value: '<'}
  ];

  otherConditions: ConditionAnswerStruct[] = [
    { displayValue: 'Equals', value: '=='}
  ];

  answers: ConditionAnswerStruct[] = [
    { displayValue: 'Yes', value: '' },
    { displayValue: 'No', value: '!' }
  ];

  frames: FrameStruct[] = [ ];

  selectedCondition: string;
  selectedAnswer: string;
  selectedType: string;
  enteredQuestion: string;
  answerType = '';

  subInputsTypes: Type[] = [];

  constructor(private formService: TransferService) {  }

  ngOnInit() {
    this.answerType = this.receivedType;
  }

  addSubInput() {
    this.frames.push({
      condition: this.selectedCondition,
      answer: this.selectedAnswer,
      question: this.enteredQuestion,
      type: this.selectedType
    });

    this.subInputsTypes.push({
      value: this.selectedType
    });
    // console.log(this.enteredQuestion);
    // console.log(this.selectedType);
    // console.log(this.subInputsTypes);
    this.formService.sendFrame(this.frames);
  }

  deleteSubInput() {
    console.log(this.subInputsTypes);
    console.log(this.subInputsTypes.length);
    this.subInputsTypes.splice(this.subInputsTypes.length - 1, 1);
    console.log(this.subInputsTypes);
  }
}
