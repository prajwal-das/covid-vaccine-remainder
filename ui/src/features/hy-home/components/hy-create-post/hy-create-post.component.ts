import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Location} from '@angular/common';

@Component({
  selector: 'hy-create-post',
  templateUrl: './hy-create-post.component.html',
  styleUrls: ['./hy-create-post.component.scss']
})
export class HyCreatePostComponent implements OnInit {


  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';

  post = {
    title: '',
    content: '',
    attachment: null,
  };

  constructor(private postService: PostsService,
              private location: Location) { }

  ngOnInit(): void {
  }

  createPost(): void {
    console.log(this.post.attachment);
    this.postService.createPost(this.post).subscribe((res) => {
      console.log(res);
      this.location.back();

    });
  }

  uploadFileEvt(imgFile: any): any {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name + ' - ';
      });
      this.post.attachment = imgFile.target.files[0];
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }
}
