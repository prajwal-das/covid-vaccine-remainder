import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {AuthService} from '../../../hy-auth/services/auth.service';

@Component({
  selector: 'hy-post-card',
  templateUrl: './hy-post-card.component.html',
  styleUrls: ['./hy-post-card.component.scss']
})
export class HyPostCardComponent implements OnInit {

  @Input()
  post;

  @Input()
  opened = false;

  @Output()
  commentClicked = new EventEmitter<any>();

  hideCommentInput = true;

  comment = '';

  constructor(private postService: PostsService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  addComment(): void {
    if (this.comment && this.comment.length > 0) {
      this.postService.commentOnPost(this.comment, this.post.id).subscribe(res => {
        this.post.comments.push(res.data);
      });
      this.comment = '';
    }
  }

  checkLikes(): boolean {
    const uid = this.authService.userData.uid;
    return this.post.likes.filter(p => p.createdBy.id === uid).length <= 0;
  }

  likePost(): void {
    if (this.checkLikes()) {
      this.postService.likePost(this.post.id).subscribe(res => {
        this.post.likes.push(res.data);
      });
    }
  }

  toggleCommentView(): any {
    this.hideCommentInput = !this.hideCommentInput;
    this.commentClicked.emit(this.hideCommentInput ? undefined : this.post);
  }
}
