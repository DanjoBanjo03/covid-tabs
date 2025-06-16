import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CanadaSummaryComponent } from './canada-summary/canada-summary.component';
import { OntarioStatusComponent } from './ontario-status/ontario-status.component';

@NgModule({
  declarations: [CanadaSummaryComponent, OntarioStatusComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [CanadaSummaryComponent, OntarioStatusComponent]
})
export class ComponentsModule {}