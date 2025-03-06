import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridService } from '../../services/grid.service';

@Component({
  selector: 'app-dynamic-grid',
  imports: [CommonModule],
  templateUrl: './dynamic-grid.component.html',
  styleUrl: './dynamic-grid.component.css'
})
export class DynamicGridComponent {
  shows = [
    { title: 'Breaking Bad', category: 'Drama', year: '2022', rating: 'TV-MA' },
    { title: 'Stranger Things', category: 'Sci-Fi', year: '2023', rating: 'PG-13' },
    { title: 'Brooklyn Nine-Nine', category: 'Comedy', year: '2024', rating: 'PG' },
    { title: 'Avengers', category: 'Action', year: '2023', rating: 'PG-13' },
  ];

  filteredShows = this.shows;

  constructor(private readonly _gridService: GridService) {}

  ngOnInit() {
    this._gridService.filters$.subscribe(filters => {
      this.filteredShows = this.shows.filter(show =>
        (filters.category.length === 0 || filters.category.includes(show.category)) &&
        (filters.year.length === 0 || filters.year.includes(show.year)) &&
        (filters.rating.length === 0 || filters.rating.includes(show.rating))
      );
    });
  }
}
