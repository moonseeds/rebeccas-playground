import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Post} from '../post.model';
import {PostsService} from '../post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent: '';
  enteredTitle: '';

  // EventEmitter is a generic type. to change what it emits you enter <>. It means you can restrict what data you are emitting.
  // @Output() // this turns postCreated into an event you can listen to elsewhere ie the parent component (app.component.html)
 // postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) {

  }

  onAddPost(form: NgForm ) {
    if (form.invalid) {
      return;
    }
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content};
    // emits the post as an arguement
    // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
