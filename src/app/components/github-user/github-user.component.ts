import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { User } from "../../interfaces/user";
import { ProfileUserComponent } from "./components/profile-user/profile-user.component";
import { SubmitButtonComponent } from "./components/submit-button/submit-button.component";
import { GithubApiService } from "../../services/github-api.service";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-github-user',
  standalone: true,
  imports: [SubmitButtonComponent, ProfileUserComponent, FormsModule, CommonModule],
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
  invalid: boolean = false;
  error: boolean = false;
  repos: any;
  showCard: boolean = false;
  type: string = 'public';
  page: number = 1;
  items: number = 5; 
  sort: string = 'updated'; 
  direction: string = 'desc';
  
constructor(private apiService: GithubApiService){}

  getUsername(username: string) {
    this.getisDisabled()
    if (this.username.trim() || username.trim()) {
      this.username = username;
      this.error = false;
      this.invalid = false;
      this.apiService.getUser(this.username).subscribe({
          next: (userData: any) => {
          if (userData && !userData.hasOwnProperty('message')) {
            this.getUserData(userData);
            this.setReposData();
          } else {
            this.error = true;
            this.showCard = true;
          }
        },
      error: (e: any) => {
        this.error = true;
        this.showCard = true;
      }
    })
    } else {
      console.log('ingresa un usuario valido');
      this.invalid = true
    }
  }
  setReposData = () =>{
    this.apiService.getRecentsRepos(this.username,this.type, this.page, this.items, this.sort, this.direction).subscribe({
      next: (reposData: any) => {
        this.getReposData(reposData);
      },
      error: (reposError: any) => {
        console.error('Error al obtener repositorios:', reposError);
        this.error = true;
      }
  })
  }
  getUserData = (user: User) => {
    this.username = user.login;
    this.user = user;
    this.showCard = true;
  }
  getReposData = (repos: any) => {
    this.repos = repos;
  }
  cleanData = () => {
    this.username = '';
    this.showCard = false;
    this.error = false;
    this.invalid = false;
  }

  getisDisabled = () => {
    if (this.username.trim()) 
      this.invalid = true
  }
}
