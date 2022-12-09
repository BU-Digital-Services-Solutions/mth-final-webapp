import { Component, OnInit, ViewChild} from '@angular/core';
import { StandardsService } from 'src/app/Services/standards.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';

export interface StandardData {
  Type: string;
  Standard: string;
  StandardLink: string;
  Edition: number;
  PublicationYear: number;
  Status: string;
  StandardTitle: string;
  Description: string;
  CorrigendaAmendments: string;
  FDARecognizedConsensusStandard: string;
  EUHarmonisedStandard:string;
  EURegulation:string;  
}

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.css']
})

export class StandardsComponent implements OnInit {

  displayedColumns: string[] = ['select','Standard','StandardTitle','Type','Edition','PublicationYear',
  'Status','CorrigendaAmendments','FDARecognizedConsensusStandard','EUHarmonisedStandard','EURegulation','edit'];
  dataSource:any
  selection = new SelectionModel<StandardData>(true, []);
  stand:any;
  @ViewChild(MatSort) sort: MatSort;

  //FILTERS ===========
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  //FILTERS
  constructor( private user:StandardsService) { }
   ngOnInit(): void {
    this.getStandardsData();
    this.dataSource.sort = this.sort;
    
  }
getStandardsData(){
  this.user.getstand().subscribe(stand=>{
    console.warn(stand)
    this.stand=stand
    this.dataSource = new MatTableDataSource<StandardData>(this.stand);
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

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: StandardData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;

  }

}
