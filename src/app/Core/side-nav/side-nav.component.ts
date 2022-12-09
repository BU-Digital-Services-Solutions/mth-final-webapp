import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { RegulationsService } from 'src/app/Services/regulations.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnChanges {

  @Input() sidenavState :any;
  // data:any;
  // constructor( private user:RegulationsService) {
  //   this.user.getbytag().subscribe(data=>{
  //     console.warn(data)
  //     this.data=data
  //   })
  //  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.sidenavState,"sidenavState")
  }

}
