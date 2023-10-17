import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { shortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    CommentsComponent,
    shortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective
   
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    shortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective 
  ]
})
export class SharedModule { }
