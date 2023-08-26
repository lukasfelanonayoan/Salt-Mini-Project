import { Component, Input } from '@angular/core';
import { faArrowUp, faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-highlight',
  templateUrl: './post-highlight.component.html',
  styleUrls: ['./post-highlight.component.scss']
})
export class PostHighlightComponent {
  @Input() data: any[] = [];
  @Input() typeContent: any;
  imgPlus = faPlus;
  imgUpload = faArrowUp;
  imgDotCircle = faCircle;
}
