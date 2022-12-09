import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-by-tag',
  templateUrl: './by-tag.component.html',
  styleUrls: ['./by-tag.component.css']
})
export class ByTagComponent implements OnInit {
  value = 'Clear me';
  cards = [
    {title: 'Title 1', content1: 'Vigilance',content2:'Market surveillance', content3:'Traceability' },
  ];

  ngOnInit(): void {
  }

}
