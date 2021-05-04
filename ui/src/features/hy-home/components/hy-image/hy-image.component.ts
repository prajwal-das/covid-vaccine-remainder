import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'hy-image',
  templateUrl: './hy-image.component.html',
  styleUrls: ['./hy-image.component.scss']
})
export class HyImageComponent implements OnInit {

  @Input()
  id;

  retrievedImage;

  constructor(private postsService: PostsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // this.postsService.getPostImage(this.id).subscribe((data) => {
    //   console.log(data);
    //   this.retrievedImage = data;
    // });
  }
}
