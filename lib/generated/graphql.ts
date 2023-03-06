import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateVideo = {
  __typename?: 'AggregateVideo';
  _count?: Maybe<VideoCountAggregate>;
  _max?: Maybe<VideoMaxAggregate>;
  _min?: Maybe<VideoMinAggregate>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyVideo: AffectedRowsOutput;
  createOneVideo: Video;
  deleteManyVideo: AffectedRowsOutput;
  deleteOneVideo?: Maybe<Video>;
  updateManyVideo: AffectedRowsOutput;
  updateOneVideo?: Maybe<Video>;
  upsertOneVideo: Video;
};


export type MutationCreateManyVideoArgs = {
  data: Array<VideoCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneVideoArgs = {
  data: VideoCreateInput;
};


export type MutationDeleteManyVideoArgs = {
  where?: InputMaybe<VideoWhereInput>;
};


export type MutationDeleteOneVideoArgs = {
  where: VideoWhereUniqueInput;
};


export type MutationUpdateManyVideoArgs = {
  data: VideoUpdateManyMutationInput;
  where?: InputMaybe<VideoWhereInput>;
};


export type MutationUpdateOneVideoArgs = {
  data: VideoUpdateInput;
  where: VideoWhereUniqueInput;
};


export type MutationUpsertOneVideoArgs = {
  create: VideoCreateInput;
  update: VideoUpdateInput;
  where: VideoWhereUniqueInput;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateVideo: AggregateVideo;
  findFirstVideo?: Maybe<Video>;
  findFirstVideoOrThrow?: Maybe<Video>;
  getVideo?: Maybe<Video>;
  groupByVideo: Array<VideoGroupBy>;
  video?: Maybe<Video>;
  videos: Array<Video>;
};


export type QueryAggregateVideoArgs = {
  cursor?: InputMaybe<VideoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VideoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryFindFirstVideoArgs = {
  cursor?: InputMaybe<VideoWhereUniqueInput>;
  distinct?: InputMaybe<Array<VideoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VideoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryFindFirstVideoOrThrowArgs = {
  cursor?: InputMaybe<VideoWhereUniqueInput>;
  distinct?: InputMaybe<Array<VideoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VideoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryGetVideoArgs = {
  where: VideoWhereUniqueInput;
};


export type QueryGroupByVideoArgs = {
  by: Array<VideoScalarFieldEnum>;
  having?: InputMaybe<VideoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VideoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryVideoArgs = {
  where: VideoWhereUniqueInput;
};


export type QueryVideosArgs = {
  cursor?: InputMaybe<VideoWhereUniqueInput>;
  distinct?: InputMaybe<Array<VideoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VideoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  rentedBy: Scalars['String'];
  returnDate: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
};

export type VideoCountAggregate = {
  __typename?: 'VideoCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  rentedBy: Scalars['Int'];
  returnDate: Scalars['Int'];
  status: Scalars['Int'];
  title: Scalars['Int'];
};

export type VideoCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  rentedBy?: InputMaybe<SortOrder>;
  returnDate?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type VideoCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  rentedBy: Scalars['String'];
  returnDate: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
};

export type VideoCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  rentedBy: Scalars['String'];
  returnDate: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
};

export type VideoGroupBy = {
  __typename?: 'VideoGroupBy';
  _count?: Maybe<VideoCountAggregate>;
  _max?: Maybe<VideoMaxAggregate>;
  _min?: Maybe<VideoMinAggregate>;
  id: Scalars['String'];
  rentedBy: Scalars['String'];
  returnDate: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
};

export type VideoMaxAggregate = {
  __typename?: 'VideoMaxAggregate';
  id?: Maybe<Scalars['String']>;
  rentedBy?: Maybe<Scalars['String']>;
  returnDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type VideoMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  rentedBy?: InputMaybe<SortOrder>;
  returnDate?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type VideoMinAggregate = {
  __typename?: 'VideoMinAggregate';
  id?: Maybe<Scalars['String']>;
  rentedBy?: Maybe<Scalars['String']>;
  returnDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type VideoMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  rentedBy?: InputMaybe<SortOrder>;
  returnDate?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type VideoOrderByWithAggregationInput = {
  _count?: InputMaybe<VideoCountOrderByAggregateInput>;
  _max?: InputMaybe<VideoMaxOrderByAggregateInput>;
  _min?: InputMaybe<VideoMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  rentedBy?: InputMaybe<SortOrder>;
  returnDate?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type VideoOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  rentedBy?: InputMaybe<SortOrder>;
  returnDate?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum VideoScalarFieldEnum {
  Id = 'id',
  RentedBy = 'rentedBy',
  ReturnDate = 'returnDate',
  Status = 'status',
  Title = 'title'
}

export type VideoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VideoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VideoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VideoScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  rentedBy?: InputMaybe<StringWithAggregatesFilter>;
  returnDate?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type VideoUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentedBy?: InputMaybe<StringFieldUpdateOperationsInput>;
  returnDate?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VideoUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rentedBy?: InputMaybe<StringFieldUpdateOperationsInput>;
  returnDate?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VideoWhereInput = {
  AND?: InputMaybe<Array<VideoWhereInput>>;
  NOT?: InputMaybe<Array<VideoWhereInput>>;
  OR?: InputMaybe<Array<VideoWhereInput>>;
  id?: InputMaybe<StringFilter>;
  rentedBy?: InputMaybe<StringFilter>;
  returnDate?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type VideoWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CreateOneVideoMutationVariables = Exact<{
  data: VideoCreateInput;
}>;


export type CreateOneVideoMutation = { __typename?: 'Mutation', createOneVideo: { __typename?: 'Video', rentedBy: string, returnDate: string, status: string, title: string } };

export type DeleteOneVideoMutationVariables = Exact<{
  deleteOneVideoWhere2: VideoWhereUniqueInput;
}>;


export type DeleteOneVideoMutation = { __typename?: 'Mutation', deleteOneVideo?: { __typename?: 'Video', rentedBy: string, returnDate: string, status: string, title: string } | null };

export type UpdateOneVideoMutationVariables = Exact<{
  data: VideoUpdateInput;
  where: VideoWhereUniqueInput;
}>;


export type UpdateOneVideoMutation = { __typename?: 'Mutation', updateOneVideo?: { __typename?: 'Video', rentedBy: string, returnDate: string, status: string, title: string } | null };

export type GetVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVideosQuery = { __typename?: 'Query', videos: Array<{ __typename?: 'Video', id: string, title: string, status: string, rentedBy: string, returnDate: string }> };


export const CreateOneVideoDocument = gql`
    mutation createOneVideo($data: VideoCreateInput!) {
  createOneVideo(data: $data) {
    rentedBy
    returnDate
    status
    title
  }
}
    `;
export type CreateOneVideoMutationFn = Apollo.MutationFunction<CreateOneVideoMutation, CreateOneVideoMutationVariables>;

/**
 * __useCreateOneVideoMutation__
 *
 * To run a mutation, you first call `useCreateOneVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneVideoMutation, { data, loading, error }] = useCreateOneVideoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneVideoMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneVideoMutation, CreateOneVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneVideoMutation, CreateOneVideoMutationVariables>(CreateOneVideoDocument, options);
      }
export type CreateOneVideoMutationHookResult = ReturnType<typeof useCreateOneVideoMutation>;
export type CreateOneVideoMutationResult = Apollo.MutationResult<CreateOneVideoMutation>;
export type CreateOneVideoMutationOptions = Apollo.BaseMutationOptions<CreateOneVideoMutation, CreateOneVideoMutationVariables>;
export const DeleteOneVideoDocument = gql`
    mutation deleteOneVideo($deleteOneVideoWhere2: VideoWhereUniqueInput!) {
  deleteOneVideo(where: $deleteOneVideoWhere2) {
    rentedBy
    returnDate
    status
    title
  }
}
    `;
export type DeleteOneVideoMutationFn = Apollo.MutationFunction<DeleteOneVideoMutation, DeleteOneVideoMutationVariables>;

/**
 * __useDeleteOneVideoMutation__
 *
 * To run a mutation, you first call `useDeleteOneVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneVideoMutation, { data, loading, error }] = useDeleteOneVideoMutation({
 *   variables: {
 *      deleteOneVideoWhere2: // value for 'deleteOneVideoWhere2'
 *   },
 * });
 */
export function useDeleteOneVideoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneVideoMutation, DeleteOneVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneVideoMutation, DeleteOneVideoMutationVariables>(DeleteOneVideoDocument, options);
      }
export type DeleteOneVideoMutationHookResult = ReturnType<typeof useDeleteOneVideoMutation>;
export type DeleteOneVideoMutationResult = Apollo.MutationResult<DeleteOneVideoMutation>;
export type DeleteOneVideoMutationOptions = Apollo.BaseMutationOptions<DeleteOneVideoMutation, DeleteOneVideoMutationVariables>;
export const UpdateOneVideoDocument = gql`
    mutation updateOneVideo($data: VideoUpdateInput!, $where: VideoWhereUniqueInput!) {
  updateOneVideo(data: $data, where: $where) {
    rentedBy
    returnDate
    status
    title
  }
}
    `;
export type UpdateOneVideoMutationFn = Apollo.MutationFunction<UpdateOneVideoMutation, UpdateOneVideoMutationVariables>;

/**
 * __useUpdateOneVideoMutation__
 *
 * To run a mutation, you first call `useUpdateOneVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneVideoMutation, { data, loading, error }] = useUpdateOneVideoMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneVideoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneVideoMutation, UpdateOneVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneVideoMutation, UpdateOneVideoMutationVariables>(UpdateOneVideoDocument, options);
      }
export type UpdateOneVideoMutationHookResult = ReturnType<typeof useUpdateOneVideoMutation>;
export type UpdateOneVideoMutationResult = Apollo.MutationResult<UpdateOneVideoMutation>;
export type UpdateOneVideoMutationOptions = Apollo.BaseMutationOptions<UpdateOneVideoMutation, UpdateOneVideoMutationVariables>;
export const GetVideosDocument = gql`
    query getVideos {
  videos {
    id
    title
    status
    rentedBy
    returnDate
  }
}
    `;

/**
 * __useGetVideosQuery__
 *
 * To run a query within a React component, call `useGetVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVideosQuery(baseOptions?: Apollo.QueryHookOptions<GetVideosQuery, GetVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVideosQuery, GetVideosQueryVariables>(GetVideosDocument, options);
      }
export function useGetVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVideosQuery, GetVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVideosQuery, GetVideosQueryVariables>(GetVideosDocument, options);
        }
export type GetVideosQueryHookResult = ReturnType<typeof useGetVideosQuery>;
export type GetVideosLazyQueryHookResult = ReturnType<typeof useGetVideosLazyQuery>;
export type GetVideosQueryResult = Apollo.QueryResult<GetVideosQuery, GetVideosQueryVariables>;