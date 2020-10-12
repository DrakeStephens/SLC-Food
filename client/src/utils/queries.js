import gql from 'graphql-tag';

export const QUERY_RESTAURANTS = gql`
  query restaurants($username: String) {
    restaurants(username: $username) {
      _id
      username
      restaurantName
      address
      phone
      url
      description
    }
  }
`;

export const QUERY_RESTURAUNT = gql`
  query resturaunt($id: ID!) {
    resturaunt(_id: $id) {
      _id
      resturauntName
      url
      description
      address
      phone
      username
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
        address
        phone
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
        address
        phone
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