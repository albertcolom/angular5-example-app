import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-modal-detail.component',
  templateUrl: './post-modal-detail.component.html',
})
export class PostModalDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<PostModalDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post) { }

  closeModal(): void {
    this.dialogRef.close();
  }
}
