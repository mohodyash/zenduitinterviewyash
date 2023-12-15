import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-datafilter',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.scss']
})
export class DatafilterComponent {

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  today = new Date()
  date = `${this.today.getDate()}/${this.today.getMonth()}/${this.today.getFullYear()}` 



}
