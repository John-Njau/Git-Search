import { Component, OnInit } from '@angular/core';
import { RepoInterface } from 'src/app/class/repo';
import { UserService } from 'src/app/services/user.service';
import { RepoDetails } from '../../repo-details';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  reponame: any;  //searchname
  ExistingRepos: any;  //repos

  constructor(private userService: UserService) {
    this.userService = userService
    console.log(this.reponame);

  }

  searchGithubRepo() {
    this.userService.updateRepo(this.reponame);
    this.userService.searchGithubRepo().subscribe(
      data => { this.ExistingRepos = data['items'];
      }
    )
  }

  ngOnInit(): void {
    this.userService.searchGithubRepo().subscribe(
      data => {
        this.ExistingRepos = data['items'];
        console.log(this.ExistingRepos);
      }
    )
  }

}
