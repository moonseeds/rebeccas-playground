import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent: '';
  enteredTitle: '';

  @Output() // this turns postCreated into an event you can listen to elsewhere ie the parent component (app.component.html)
  postCreated = new EventEmitter();

  onAddPost() {
    const post = {title: this.enteredTitle, content: this.enteredContent};
    // emits the post as an arguement
    this.postCreated.emit(post);
  }
}
