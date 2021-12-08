import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../services/entry.service';
import { Entry } from '../../Entry';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
      this.entryService
        .getEntries()
        .subscribe((entries) => this.entries = entries);
  }

}
