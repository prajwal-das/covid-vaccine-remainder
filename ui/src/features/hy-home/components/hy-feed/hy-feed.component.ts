import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {interval} from 'rxjs';

@Component({
  selector: 'hy-feed',
  templateUrl: './hy-feed.component.html',
  styleUrls: ['./hy-feed.component.scss']
})
export class HyFeedComponent implements OnInit, OnDestroy {

  posts = [];
  postSub;
  openId;

  constructor(private postsService: PostsService) {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postsService.getAllPosts().subscribe(res => {
      this.posts = res.data;
      console.log(this.posts);
    });
  }


  ngOnInit(): void {
    this.postSub = interval(10000)
      .subscribe((val) => {
        this.getAllPosts();
      });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

  commentClicked(event: any): any {
    this.openId = event ? event.id : undefined;
  }
}
