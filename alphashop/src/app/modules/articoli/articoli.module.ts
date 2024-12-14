import { ArticoliComponent } from './pages/articoli/articoli.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';
import { FormsModule } from '@angular/forms';
import { ColorChangeDirective } from 'src/app/shared/directives/color-change.directive';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ArticoliComponent,
    GridArticoliComponent,
    ArticoliCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    SharedModule
  ]
})
export class ArticoliModule { }
