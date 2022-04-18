import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../class/user'
import { environment } from 'src/environments/environment';
import { RepoInterface } from '../class/repo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // search!: Userprofile
  searchuser = `john-njau`

  ExistingRepos: any;
  searchRepo = "gitsearch" //repo search
  // private Git_token= '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';

  // GITHUB_API_URL = `https://api.github.com/users/`
  REPO_URL = `https://api.github.com/search/repositories?q=`

  constructor(private http: HttpClient) {
    // this.search = new Userprofile(0,0,0,'','','','','','','','','','','','','')
  }

  githubUser(): Observable<UserInterface> {
    let headers = new HttpHeaders({ 'Authorization': 'token ' + environment.Api_Key });
    let searchRequest = environment.GITHUB_API_URL + this.searchuser;
    let options = { headers: headers };
    return this.http.get<UserInterface>(searchRequest, options);
    // return this.http.get<UserInterface>(this.GITHUB_API_URL + this.searchuser + `?access_token=`+this.Git_token);
    // this.search.id;
    // this.search.followers;
  }

  getUserRepos(): Observable<RepoInterface> {
    let headers = new HttpHeaders({ 'Authorization': 'token ' + environment.Api_Key });
    let searchRequest = environment.GITHUB_API_URL + this.searchuser + "/repos";
    let options = { headers: headers };
    return this.http.get<RepoInterface>(searchRequest, options);
    // return this.http.get<RepoInterface>(this.GITHUB_API_URL + this.searchuser + "/repos");
  }

  searchGithubRepo(): Observable<RepoInterface> {
    return this.http.get<RepoInterface>(this.REPO_URL + this.searchRepo + "");
  }

  updateName(userName: string) {
    this.searchuser = userName;
  }

  updateRepo(repoName: string) {
    this.searchRepo = repoName;
  }
}
