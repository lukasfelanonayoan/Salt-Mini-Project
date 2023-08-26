import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostActivityComponent } from "./post-activity/post-activity.component";
import { PostHighlightComponent } from "./post-highlight/post-highlight.component";
import { PostChannelsComponent } from './post-channels/post-channels.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations : [
        PostActivityComponent,
        PostHighlightComponent,
        PostChannelsComponent
    ],
    imports : [
        CommonModule,
        FontAwesomeModule
    ],
    exports : [
        PostActivityComponent,
        PostHighlightComponent,
        PostChannelsComponent
    ]
})

export class ComponentsModule {}
