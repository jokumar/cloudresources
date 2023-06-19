/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateBlog: OnCreateBlogSubscription;
  onUpdateBlog: OnUpdateBlogSubscription;
  onDeleteBlog: OnDeleteBlogSubscription;
  onCreateComment: OnCreateCommentSubscription;
  onUpdateComment: OnUpdateCommentSubscription;
  onDeleteComment: OnDeleteCommentSubscription;
};

export type CreateBlogInput = {
  id?: string | null;
  name: string;
  createdBy: string;
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  and?: Array<ModelBlogConditionInput | null> | null;
  or?: Array<ModelBlogConditionInput | null> | null;
  not?: ModelBlogConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Blog = {
  __typename: "Blog";
  id: string;
  name: string;
  createdBy: string;
  comments?: ModelCommentConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items: Array<Comment | null>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  createdBy: string;
  blog?: Blog | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  blogCommentsId?: string | null;
};

export type UpdateBlogInput = {
  id: string;
  name?: string | null;
  createdBy?: string | null;
};

export type DeleteBlogInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  createdBy: string;
  content: string;
  blogCommentsId?: string | null;
};

export type ModelCommentConditionInput = {
  createdBy?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
  blogCommentsId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCommentInput = {
  id: string;
  createdBy?: string | null;
  content?: string | null;
  blogCommentsId?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  and?: Array<ModelBlogFilterInput | null> | null;
  or?: Array<ModelBlogFilterInput | null> | null;
  not?: ModelBlogFilterInput | null;
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection";
  items: Array<Blog | null>;
  nextToken?: string | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  createdBy?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
  blogCommentsId?: ModelIDInput | null;
};

export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  createdBy?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionBlogFilterInput | null> | null;
  or?: Array<ModelSubscriptionBlogFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  createdBy?: ModelSubscriptionStringInput | null;
  content?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCommentFilterInput | null> | null;
  or?: Array<ModelSubscriptionCommentFilterInput | null> | null;
};

export type CreateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  createdBy: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      createdBy: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      blogCommentsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  createdBy: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      createdBy: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      blogCommentsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  createdBy: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      createdBy: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      blogCommentsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  createdBy: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdBy: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  blogCommentsId?: string | null;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  createdBy: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdBy: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  blogCommentsId?: string | null;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  createdBy: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdBy: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  blogCommentsId?: string | null;
};

export type GetBlogQuery = {
  __typename: "Blog";
  id: string;
  name: string;
  createdBy: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      createdBy: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      blogCommentsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBlogsQuery = {
  __typename: "ModelBlogConnection";
  items: Array<{
    __typename: "Blog";
    id: string;
    name: string;
    createdBy: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  createdBy: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdBy: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  blogCommentsId?: string | null;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    createdBy: string;
    blog?: {
      __typename: "Blog";
      id: string;
      name: string;
      createdBy: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    blogCommentsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  createdBy: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      createdBy: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      blogCommentsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  createdBy: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      createdBy: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      blogCommentsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  createdBy: string;
  comments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      createdBy: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      blogCommentsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  createdBy: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdBy: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  blogCommentsId?: string | null;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  createdBy: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdBy: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  blogCommentsId?: string | null;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  createdBy: string;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdBy: string;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  blogCommentsId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBlog(
    input: CreateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<CreateBlogMutation> {
    const statement = `mutation CreateBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) {
        createBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          createdBy
          comments {
            __typename
            items {
              __typename
              id
              createdBy
              content
              createdAt
              updatedAt
              blogCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBlogMutation>response.data.createBlog;
  }
  async UpdateBlog(
    input: UpdateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<UpdateBlogMutation> {
    const statement = `mutation UpdateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) {
        updateBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          createdBy
          comments {
            __typename
            items {
              __typename
              id
              createdBy
              content
              createdAt
              updatedAt
              blogCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBlogMutation>response.data.updateBlog;
  }
  async DeleteBlog(
    input: DeleteBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<DeleteBlogMutation> {
    const statement = `mutation DeleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) {
        deleteBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          createdBy
          comments {
            __typename
            items {
              __typename
              id
              createdBy
              content
              createdAt
              updatedAt
              blogCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBlogMutation>response.data.deleteBlog;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          createdBy
          blog {
            __typename
            id
            name
            createdBy
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
          blogCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          createdBy
          blog {
            __typename
            id
            name
            createdBy
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
          blogCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          createdBy
          blog {
            __typename
            id
            name
            createdBy
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
          blogCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async GetBlog(id: string): Promise<GetBlogQuery> {
    const statement = `query GetBlog($id: ID!) {
        getBlog(id: $id) {
          __typename
          id
          name
          createdBy
          comments {
            __typename
            items {
              __typename
              id
              createdBy
              content
              createdAt
              updatedAt
              blogCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBlogQuery>response.data.getBlog;
  }
  async ListBlogs(
    filter?: ModelBlogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBlogsQuery> {
    const statement = `query ListBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) {
        listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdBy
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBlogsQuery>response.data.listBlogs;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          createdBy
          blog {
            __typename
            id
            name
            createdBy
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
          blogCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdBy
            blog {
              __typename
              id
              name
              createdBy
              createdAt
              updatedAt
            }
            content
            createdAt
            updatedAt
            blogCommentsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  OnCreateBlogListener(
    filter?: ModelSubscriptionBlogFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBlog">>
  > {
    const statement = `subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
        onCreateBlog(filter: $filter) {
          __typename
          id
          name
          createdBy
          comments {
            __typename
            items {
              __typename
              id
              createdBy
              content
              createdAt
              updatedAt
              blogCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBlog">>
    >;
  }

  OnUpdateBlogListener(
    filter?: ModelSubscriptionBlogFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBlog">>
  > {
    const statement = `subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
        onUpdateBlog(filter: $filter) {
          __typename
          id
          name
          createdBy
          comments {
            __typename
            items {
              __typename
              id
              createdBy
              content
              createdAt
              updatedAt
              blogCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBlog">>
    >;
  }

  OnDeleteBlogListener(
    filter?: ModelSubscriptionBlogFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBlog">>
  > {
    const statement = `subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
        onDeleteBlog(filter: $filter) {
          __typename
          id
          name
          createdBy
          comments {
            __typename
            items {
              __typename
              id
              createdBy
              content
              createdAt
              updatedAt
              blogCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBlog">>
    >;
  }

  OnCreateCommentListener(
    filter?: ModelSubscriptionCommentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  > {
    const statement = `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
        onCreateComment(filter: $filter) {
          __typename
          id
          createdBy
          blog {
            __typename
            id
            name
            createdBy
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
          blogCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
    >;
  }

  OnUpdateCommentListener(
    filter?: ModelSubscriptionCommentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  > {
    const statement = `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
        onUpdateComment(filter: $filter) {
          __typename
          id
          createdBy
          blog {
            __typename
            id
            name
            createdBy
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
          blogCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
    >;
  }

  OnDeleteCommentListener(
    filter?: ModelSubscriptionCommentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  > {
    const statement = `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
        onDeleteComment(filter: $filter) {
          __typename
          id
          createdBy
          blog {
            __typename
            id
            name
            createdBy
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
          blogCommentsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
    >;
  }
}
