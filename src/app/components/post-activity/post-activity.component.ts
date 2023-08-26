import { Component, Input } from '@angular/core';
import {
  faUnlockAlt,
  faVideo,
  faFile,
  faComment,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-activity',
  templateUrl: './post-activity.component.html',
  styleUrls: ['./post-activity.component.scss'],
})
export class PostActivityComponent {
  @Input() data: any[] = [];

  getStatus(status: any) {
    let textResult = '';
    switch (status) {
      case 'comment':
        textResult = 'commented';
        break;
      case 'add':
        textResult = 'added a new video';
        break;
      case 'share':
        textResult = 'shared a document';
        break;
      case 'unlock':
        textResult = 'unlocked new badge';
        break;
      case 'upload':
        textResult = 'uploaded new video';
        break;
      case 'like':
        textResult = 'liked a video';
        break;
    }
    return textResult;
  }

  getTagActivity(status: any) {
    let result: any;
    switch (status) {
      case 'comment':
        result = faComment;
        break;
      case 'add':
        result = faVideo;
        break;
      case 'share':
        result = faFile;
        break;
      case 'unlock':
        result = faUnlockAlt;
        break;
      case 'upload':
        result = faVideo;
        break;
      case 'like':
        result = faHeart;
        break;
    }
    return result;
  }
}
