import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getMyPosts(): any {
    const url = `/api/post/me`;
    return this.http.get(url);
  }

  createPost(post): any {
    const url = `/api/post`;

    const formData: FormData = new FormData();
    formData.append('file', post.attachment);
    post.attachment = undefined;
    formData.append('post', JSON.stringify(post));

    return this.http.post(url, formData);
  }

  getAllPosts(): any {
    const url = `/api/post`;
    return this.http.get(url);
  }


  commentOnPost(comment, postId): any {
    const url = `/api/post/${postId}/comment`;
    return this.http.post(url, comment);
  }

  likePost(postId): any {
    const url = `/api/post/${postId}/like`;
    return this.http.post(url, null);
  }

  getPostImage(postId: string): any {
    return this.http.get(`/api/post/${postId}/image`);
  }
}
