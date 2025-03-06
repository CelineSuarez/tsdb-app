import { Component } from '@angular/core';
import { FilterPanelComponent } from "../../features/filter-panel/filter-panel.component";
import { DynamicGridComponent } from "../../features/dynamic-grid/dynamic-grid.component";

@Component({
  selector: 'app-home',
  imports: [FilterPanelComponent, DynamicGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
