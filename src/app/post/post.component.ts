import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
declare let alertify:any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  path: string = "https://jsonplaceholder.typicode.com/"
  posts: Post[];
  users: User[];
  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userid"])
    })
  }
  getPosts(userid) {
    debugger
    if (userid) {    
      let newPath =this.path + "posts/?userId="+userid+"";
      
      this.http.get<Post[]>(newPath).subscribe(response => {
        this.posts = response;
      })
    }

    else  {
      this.http.get<Post[]>(this.path + "posts").subscribe(response => {
        this.posts = response;
      })
    }
  }
  getUsers() {
    this.http.get<User[]>(this.path + "users").subscribe(response => {
      this.users = response;
    })
  }
  AddToFavovirets(post) {
    alertify.error();
    ('Added')
  }
}
 