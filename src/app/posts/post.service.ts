import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {Post} from './post.model';

// provides this service on the root level. You can also add the service to the app.module.ts instead in the providers section
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  /*
  One way of doing things
  getPosts() {
    // create a new array with a copy of the objects from the posts array. the ... indicates to copy from the other array.
    // if you change varibles within this array it won't effect the original array
    return [...this.posts];
  }

  addPost(post: Post) {
    this.posts.push(post);
  }*/

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
