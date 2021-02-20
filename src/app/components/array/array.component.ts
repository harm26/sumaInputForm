import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
})
export class ArrayComponent implements OnInit {
  formulario: FormGroup;

  arreglo: any[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      pruebas: this.fb.array([]),
    });

    // this.getControl();
  }

  ngOnInit() {}

  get getPruebas() {
    return this.formulario.get('pruebas') as FormArray;
  }

  add() {
    const control = this.fb.group({ prueba: ['1'] });
    this.getPruebas.push(control);
  }

  getControl() {
    this.formulario.valueChanges.subscribe((control) => {
  console.log(control);
  
    
    });
  }

  
}
