import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Repo } from '../repo'
import { ProfileService} from '../profile.service'
import { User } from '../user';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})

export class FormSearchComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>();

  UserName: string;
  

  constructor(ProfileService:ProfileService ){
    
    
  }

 getuser1() {
    this.emitSearch.emit(this.UserName);
   
    this.UserName;                                                                                                                                                                             
  }

  ngOnInit(): void {
  }

}