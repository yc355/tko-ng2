import { Component } from '@angular/core';
import { FighterSearchComponent } from './fighter-search/fighter-search.component';

@Component({
  moduleId: module.id,
  selector: 'tko-ng2-app',
  templateUrl: 'tko-ng2.component.html',
  styleUrls: ['tko-ng2.component.css'],
  directives: [FighterSearchComponent]
})

export class TkoNg2AppComponent {

}
