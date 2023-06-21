import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, Blog, GetBlogQuery } from '../API.service';
//import {GetBlog} from '!!raw-loader!../../graphql/queries.graphql';



import { GraphQLQuery } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  id: string | null = null;;
  blogdetail : any| null= null
  constructor(private route: ActivatedRoute,private api: APIService) { 
    

  }

  async ngOnInit() {
   
    this.route.params.subscribe(params => {
      this.id = params['id']; // Convert the parameter to a number if needed
    });


   
  }

 

}
