import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticoliService } from 'src/app/core/services/articoli.service';
import { IArticoli } from 'src/app/shared/models/Articoli';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  
  @ViewChild('GridViews') child : any;
  articoli$ : IArticoli[] = [];
  
  constructor(private articoliService: ArticoliService){}
  
  ngOnInit(): void {
    
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$);
  }//
handleDelete = (art:IArticoli) => {
  console.log("cliccato tasto elimina del codice" + art.codart);

  this.articoli$.splice(this.articoli$.findIndex(x => x.codart === art.codart),1);
  console.log( this.articoli$);

}


handleEdit = (art:IArticoli) => {
  console.log("cliccato edit del codice" + art.codart);
  this.child.getValue();
}

receiveValue = (qta: number) => {
  console.log("qta: " +qta);
}


}
