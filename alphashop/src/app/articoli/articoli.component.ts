import { Component, OnInit } from '@angular/core';
import {IArticoli} from '../models/Articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit{

articoli: IArticoli[] =[ 
  {codart : '0001', descrizione : 'barilla farina', um: 'PZ', pzcart : 24, peso : 1, prezzo: 1.09,active: true,data:new Date()},
  {codart : '0002', descrizione : 'barilla pasta', um: 'PZ', pzcart : 24, peso : 1, prezzo: 1.09,active: true,data:new Date()},
  {codart : '0003', descrizione : 'findus fior di nasella', um: 'PZ', pzcart : 24, peso : 1, prezzo: 1.09,active: true,data:new Date()}
]

constructor() {}

ngOnInit(): void {
  
}

}
