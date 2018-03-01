import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

import { Post } from './post.model';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor (private http: HttpClient) {}
  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl).retry(3);
  }
  getAllPostsByUserId(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + '?_sort=id&_order=desc&userId=' + userId).retry(3);
  }
  getPostsByUserIdPaginateResponse(userId: number, page: number, limit: number): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(
      this.postsUrl + '?_sort=id&_order=desc&_page=' + page + '&_limit=' + limit + '&userId=' + userId,
      {observe: 'response'}
    ).retry(3);
  }
  deletePostById(postId: number): Observable<Post[]> {
    return this.http.delete<Post[]>(this.postsUrl + '/' + postId).retry(3);
  }
}
