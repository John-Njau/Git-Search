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

  reponame!: string
  // Repos: RepoInterface[] = []
  ExistingRepo!: any;

  constructor(private userService: UserService) {
    console.log(this.reponame);

  }

  searchGithubRepo() {
    this.userService.updateRepo(this.reponame);
    this.userService. getUserRepos().subscribe(
      repo => { this.ExistingRepo = repo }
    )


  }

  ngOnInit(): void {
    this.userService. getUserRepos().subscribe(
      data => {
        this.ExistingRepo = data
        console.log(this.ExistingRepo);
      }
    )
  }

}
