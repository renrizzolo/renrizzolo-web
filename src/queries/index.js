import gql from 'graphql-tag';

export const allAuthors = gql`
  query allAuthors {
    allAuthors {
      id
      name
      about
      avatar {
        handle
      }
    }
  }
`;


export const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!, $filter: PostFilter) {
    allPosts(orderBy: dateAndTime_DESC, first: $first, skip: $skip, filter: $filter) {
      id
      slug
      title
      dateAndTime
      coverImage {
        handle
      }
      tags {
        id
        tag
      }
    },
    _allPostsMeta {
      count
    }
  }
`;


export const singlePost = gql`
  query singlePost($slug: String!) {
    post: Post(slug: $slug) {
      id
      slug
      title
      tags {
        id
        tag
      }
      coverImage {
        handle
      }
      content
      dateAndTime
    }
  }
`