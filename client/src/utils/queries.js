import gql from 'graphql-tag';

export const QUERY_RESTAURANTS = gql`
  query restaurants($username: String) {
    restaurants(username: $username) {
      _id
      username
      restaurantName
      url
      description
    }
  }
`;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      restaurants {
        _id
        restaurantName
        url
        description
        menuItemCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      restaurants {
        _id
        restaurantName
        url
        description
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;