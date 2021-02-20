import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css'],
})
export class SumarComponent {
  formulario: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.formulario = this._fb.group({
      cantidades: this._fb.array([]),
    });
    this.getControl();
  }
  get getCantidad() {
    return this.formulario.get('cantidades') as FormArray;
  }
  add() {
    const control = this._fb.group({ cantidad: ['1'] });
    this.getCantidad.push(control);
  }
  cambio: number;
  getControl() {
    this.formulario.valueChanges.subscribe((control) => {
      this.cambio = control;
      console.log(this.cambio);
    });
  }
}
