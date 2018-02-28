import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { PostModalDetailComponent } from '../post-modal-detail/post-modal-detail.component';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-last-post-list-user',
  templateUrl: './post-list-user.component.html'
})
export class PostListUserComponent implements OnInit {
  title = 'User Posts';
  posts: Post[] = [];
  totalPosts = null;
  userId = null;
  page = 1;
  pageLimit = 5;
  loadingMore = false;
  allPosts = false;
  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => [
      this.userId = params['id']
    ]);
    this.getPaginatePosts();
  }
  openDialog(post): void {
    this.dialog.open(PostModalDetailComponent, {
      width: '70%',
      data: { post: post }
    });
  }
  getAllPostsUser() {
    this.loadingMore = true;
    this.postService.getAllPostsByUserId(this.userId).subscribe((posts: Array<Post>) => {
      this.posts = posts;
      this.allPosts = true;
      this.loadingMore = false;
    });
  }
  getPaginatePosts() {
    this.loadingMore = true;
    this.postService.getPostsByUserIdPaginateResponse(this.userId, this.page, this.pageLimit)
      .subscribe((resp: HttpResponse<Post[]>) => {
        this.posts = this.posts.concat(resp.body);
        this.totalPosts = resp.headers.get('x-total-count');
        if (this.totalPosts <= (this.page * this.pageLimit)) {
          this.allPosts = true;
        }
        this.page++;
        this.loadingMore = false;
    });
  }
}
