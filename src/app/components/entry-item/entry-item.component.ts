import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../../Entry';
import { faPlus, faMinus, faShoppingBag, faShoppingBasket, faPiggyBank, faChartLine, faAmbulance } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {
  @Input() entry: Entry;
  faPlus = faPlus;
  faMinus = faMinus;
  faShoppingBag = faShoppingBag;
  faShoppingBasket = faShoppingBasket;
  faPiggyBank = faPiggyBank;
  faChartLine = faChartLine;
  faAmbulance = faAmbulance;

  constructor() { }

  ngOnInit(): void {
  }

}
