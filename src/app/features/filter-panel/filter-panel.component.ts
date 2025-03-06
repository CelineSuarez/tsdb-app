import { Component } from '@angular/core';
import { GridService } from '../../services/grid.service';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
  imports: [MatCardModule,  MatChipsModule, CommonModule]
})
export class FilterPanelComponent {
  categories = ['Action', 'Drama', 'Comedy', 'Sci-Fi'];
  years = ['2022', '2023', '2024'];
  ratings = ['G', 'PG', 'PG-13', 'R'];

  constructor(private gridService: GridService) {}

  toggleFilter(type: 'category' | 'year' | 'rating', value: string) {
    this.gridService.updateFilters(type, value);
  }
}
