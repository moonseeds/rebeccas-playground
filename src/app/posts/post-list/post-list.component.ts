import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Post} from '../post.model';
import {PostsService} from '../post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the second post\'s content'},
  //   {title: 'Third Post', content: 'This is the third post\'s content'},
  // ];
 // @Input() // allows you to bind from posts from the outside ie the parent component ONLY form there
  posts: Post[] = [];

  private postsSub: Subscription;

  // postsService: PostsService;

  // one way of doing it
  // constructor(postsService: PostsService) {
  //   this.postsService = postsService;
  // }

  constructor(public postsService: PostsService) {}

  // recommended to do basic initialization tasts here
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    // you need to have a postSub subscription so tht you can unsubscribe from it
    //  if you don't you'll create a memory leak
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    // this unscribes from the subscription and prevent memory leaks
    this.postsSub.unsubscribe();
  }
}
