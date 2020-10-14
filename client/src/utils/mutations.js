import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RESTAURANT = gql`
  mutation addRestaurant($restaurantName: String!, $description: String!, $url: String!) {
    addRestaurant(restaurantName: $restaurantName, description: $description, url: $url) {
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

export const ADD_MENU_ITEM = gql`
  mutation addMenu($restaurantId: ID!, $item: String!, $description: String!, $price: String!) {
    addMenu(restaurantId: $restaurantId, item: $item, description: $description, price: $price) {
      _id
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