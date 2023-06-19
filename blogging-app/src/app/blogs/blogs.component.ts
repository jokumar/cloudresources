import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Blog } from '../API.service';

/** Subscription type will be inferred from this library */
import { ZenObservable } from 'zen-observable-ts';




@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, OnDestroy {

  private subscription: ZenObservable.Subscription | null = null;
  public createForm: FormGroup;

  /* declare blogs variable */
  public blogs: Array<Blog> = [];


  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  public onCreate(blog: Blog) {
    this.api
      .CreateBlog(blog)
      .then(() => {
        console.log('blog created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating blog...', e);
      });
  }


  async ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListBlogs().then((event) => {
      this.blogs = event.items as Blog[];
    });

    this.subscription = this.api.OnCreateBlogListener().subscribe(
      (event: any) => {
        const newBlog = event.value.data.onCreateBlog;
        this.blogs = [newBlog, ...this.blogs];
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

 

}
