import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { UserInterface } from '../../class/user'
import { Userprofile } from '../../userprofile'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  username: string; //username
  gitprofile!: Userprofile; //profile
  githubrepos: any

  constructor(private userService: UserService) {
    // sort of placeholder at the input section
    this.username = `${this.userService.searchuser}`
    console.log(this.username);
  }

  searchGithub() {
    this.userService.updateName(this.username);
    this.userService.githubUser().subscribe(
      user => { this.gitprofile = user }
    )
    // this.gitprofile = <any>this.userService.searchuser
    // alert(this.gitprofile);

    this.userService.getUserRepos().subscribe(repository => {
      this.githubrepos = repository
      console.log(this.githubrepos);

    })
  }

  ngOnInit(): void {
    this.userService.githubUser().subscribe(
      data => {
        this.gitprofile = data
        console.log(this.gitprofile);

      }
    )
    this.userService.getUserRepos().subscribe(repository => {
      this.githubrepos = repository
    })

  }

}
