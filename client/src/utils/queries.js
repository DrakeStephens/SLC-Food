import gql from 'graphql-tag';

export const QUERY_RESTAURANTS = gql`
  query restaurants($username: String) {
    restaurants(username: $username) {
      _id
      username
      restaurantName
      url
      description
      menuItems {
        _id
        item
        description
        price
        username
      }
    }
  }
`;

export const QUERY_RESTAURANT = gql`
  query restaurant($id: ID!) {
    restaurant(_id: $id) {
      _id
      restaurantName
      url
      description

      username
      menuItems {
        _id
        item
        description
        price
        username
      }
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
        menuItems {
          _id
          item
          description
          price
          username
        }
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
        menuItems {
          _id
          item
          description
          price
          username
        }
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