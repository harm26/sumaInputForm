import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  form: FormGroup;


  cantidadArray:any[]=[
    {nombre: "can1", precio:10},
    {nombre: "can2", precio:20},
    {nombre: "can3", precio:30},
    {nombre: "can4", precio:40}
  ]


  variable1:number;
  
  constructor( private _fb: FormBuilder ){

    this.form = this._fb.group({
      subTotal: this._fb.control([]),
      cantidad: this._fb.array([]),
  })
  }

  get getCantidad(){
    return this.form.get("cantidad") as FormArray;
  }


  
cantidadArray2:any[]=[];
modelo:any=[]

agregar(i){
this.modelo.nombre = this.cantidadArray[i].nombre;
this.modelo.precio = this.cantidadArray[i].precio;
this.cantidadArray2.push(this.modelo)
this.modelo=[]
};
ngOnInit(){}

}
