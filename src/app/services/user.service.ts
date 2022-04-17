import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../class/user'
import { Userprofile } from '../userprofile';
import { RepoInterface } from '../class/repo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  search!: Userprofile
  searchuser = `john-njau`
  // private Git_token= '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';

  GITHUB_API_URL = `https://api.github.com/users/`
  REPO_URL = `https://api.github.com/users/`

  constructor(private http: HttpClient) {
    // this.search = new Userprofile(0,0,0,'','','','','','','','','','','','','')
  }

  githubUser(): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.GITHUB_API_URL + this.searchuser);
    // return this.http.get<UserInterface>(this.GITHUB_API_URL + this.searchuser + `?access_token=`+this.Git_token);
    // this.search.id;
    // this.search.followers;
  }

  githubRepos(): Observable<RepoInterface> {
    return this.http.get<RepoInterface>(this.REPO_URL + this.searchuser + `/repos`);
  }

  updateName(userName: string) {
    this.searchuser = userName;
    }
}
