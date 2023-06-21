import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Blog } from '../API.service';

/** Subscription type will be inferred from this library */
import { ZenObservable } from 'zen-observable-ts';
import { Amplify, Auth, Storage } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';


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

  itemsToShow: any[] = []; // Contains items to display based on pagination
  blogSize = 2; // Number of items to display per page
  showReadMoreButton = true; // Flag to control the visibility of the "Read More" button

  selectedFile: File | null = null;


  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

  }

  async loadItems() {
    /* fetch blogs when app loads */
    await  this.api.ListBlogs(undefined, this.blogSize ).then((event) => {
      this.blogs = event.items as Blog[];
    });
    const endIndex = this.blogSize;
    this.itemsToShow = this.blogs.slice(0, endIndex);

    this.showReadMoreButton = endIndex <= this.blogs.length;
  }

  loadMoreItems() {
    this.blogSize= this.blogSize +2;
    this.loadItems();
  }
  public async onCreate(blog: Blog) {
    Auth.currentAuthenticatedUser().then((cognitoUsr)=> {
      blog.createdBy = cognitoUsr.getUsername()
      console.log("INFO: ",cognitoUsr.getUsername())
    }).catch((err) => console.log("error: ",err));
   
    blog.id = uuidv4();
    //upload image 
    if (this.selectedFile) {
      const timestamp = new Date().getTime();
      const filename = timestamp+ '_'+uuidv4()+"_"+this.selectedFile.name;
      // Perform the image upload here using the selectedFile
      this.uploadImage(this.selectedFile,filename);  
      blog.imageUrl = await Storage.get(filename);
    } else {
      // Handle the case where no file is selected
      console.log('No file selected');
    }

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
  
    this.loadItems();
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


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

 
  async uploadImage(file: File,  filename: string) {
    try {
     
      
      const result = await Storage.put(filename, file);
     
      console.log('Image uploaded successfully:', result);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }


}
