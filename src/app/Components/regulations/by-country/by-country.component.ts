import { Component, OnInit } from '@angular/core';
import { ByCountryService } from 'src/app/Services/by-country.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface ByCountryData {
  DocumentName: string;
  Imported: string;
  ViewSource: string;
}

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {
  displayedColumns: string[] = ['select','DocumentName', 'Imported','ViewSource','edit'];
  dataSource:any
  selection = new SelectionModel<ByCountryData>(true, []);
  data:any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor( private user:ByCountryService) {}
  ngOnInit(): void {
    this.getByCountryData();
  }

  getByCountryData(){
     this.user.getbytag().subscribe(data=>{
  console.warn(data)
   this.data=data
   this.dataSource = new MatTableDataSource<ByCountryData>(this.data);

   })

  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: ByCountryData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;

  }


  

  // constructor( private user:ByCountryService) {
  // this.user.getbytag().subscribe(data=>{
  //  console.warn(data)
  //  this.data=data
  // })
  // }

}
