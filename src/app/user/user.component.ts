import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import{ User} from '../user';
import {Repo} from '../repo'
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  user:User;
  userrepos:Repo
  User = environment.apiKey;

  constructor(public profileService:ProfileService ) { }

  getUser(UserName){
    this.profileService.getUser(UserName).then(
     ( success)=>{
       this.user = this.profileService.user;
     },
     (error)=>{
       
     }
    )


    this.profileService.getUserRepos(UserName).then(
      ( success)=>{
        this.userrepos = this.profileService.userrepos;
      
        
        


        
      },
      (error)=>{
        console.log(error)
      }
     )
  }


  ngOnInit(): void {
    this.getUser("ngenohzephenia");
    
  }

}
