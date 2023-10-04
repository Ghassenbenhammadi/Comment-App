import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment } from './../../../core/models/comment.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  
  @Input() comments!: Comment[];
  commentCtrl!: FormControl;
  
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('',[Validators.required, Validators.minLength(10)])
  }
  onLeaveComment(){

  }

}
