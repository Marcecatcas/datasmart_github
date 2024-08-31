import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { User } from "../../interfaces/user";
import { ProfileUserComponent } from "./components/profile-user/profile-user.component";
import { SubmitButtonComponent } from "./components/submit-button/submit-button.component";
import { GithubApiService } from "../../services/github-api.service";


@Component({
  selector: 'app-github-user',
  standalone: true,
  imports: [SubmitButtonComponent, ProfileUserComponent, FormsModule],
  templateUrl: './github-user.component.html',
  styleUrl: './github-user.component.scss',
})
export class GithubUserComponent {
  username: string = '';
  user: User = {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    name: null,
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: ""
  };
  repos: any;
  showCard: boolean = false;
  type: string = 'public';
  page: number = 1;
  items: number = 5; 
  sort: string = 'updated'; 
  direction: string = 'desc';
  
constructor(private apiService: GithubApiService){}

  getUsername(username: any) {
    if (username !== '' || username !== undefined || username !== null ) {
      this.username = username;
      this.apiService.getUser(this.username).subscribe(
          userData => {
            this.getUserData(userData);
            this.apiService.getRecentsRepos(this.username,this.type, this.page, this.items, this.sort, this.direction).subscribe(
              reposData => {
                this.getReposData(reposData)
              }
            )
          })
     
    } else {
      console.log('ingresa un usuario valido');
    }
  }

  getUserData(user: User) {
    this.username = user.login;
    this.user = user;
    this.showCard = true;
  }

  getReposData(repos: any){
    this.repos = repos;
  }

}
