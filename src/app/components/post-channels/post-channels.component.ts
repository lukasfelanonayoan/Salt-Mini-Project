import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-channels',
  templateUrl: './post-channels.component.html',
  styleUrls: ['./post-channels.component.scss']
})
export class PostChannelsComponent {
  @Input() data: any[] = [];
}
