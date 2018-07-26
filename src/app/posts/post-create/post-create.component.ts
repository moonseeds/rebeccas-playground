import {Component, EventEmitter, Output} from '@angular/core';

import {Post} from '../post.model';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent: '';
  enteredTitle: '';

  // EventEmitter is a generic type. to change what it emits you enter <>. It means you can restrict what data you are emitting. 
  @Output() // this turns postCreated into an event you can listen to elsewhere ie the parent component (app.component.html)
  postCreated = new EventEmitter<Post>();

  onAddPost() {
    const post: Post = {title: this.enteredTitle, content: this.enteredContent};
    // emits the post as an arguement
    this.postCreated.emit(post);
  }
}
